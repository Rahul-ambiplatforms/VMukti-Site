#!/usr/bin/env node
/**
 * VMukti Post-Build Prerender Script
 *
 * Generates static HTML snapshots of all routes after build.
 * This ensures Google can crawl and index all pages even though
 * the site is a React SPA.
 *
 * How it works:
 * 1. Starts a local server from the build/ folder
 * 2. Uses Puppeteer to visit each route
 * 3. Captures the fully-rendered HTML
 * 4. Saves it as index.html in the corresponding build/ subfolder
 *
 * Run: node scripts/postbuild-prerender.js
 * Or add to package.json: "postbuild": "node scripts/postbuild-prerender.js"
 *
 * Prerequisites: npm install puppeteer express --save-dev
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BUILD_DIR = path.join(process.cwd(), 'build');
const BASE_URL = 'https://www.vmukti.com';

// All routes to prerender
const routes = require('./prerender-routes');

/**
 * Generate a static HTML shell for a given route.
 */
const generateStaticShell = (route) => {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  if (!html.includes('prerender-status-code')) {
    html = html.replace(
      '</head>',
      '  <meta name="prerender-status-code" content="200">\n  </head>'
    );
  }

  return html;
};

/**
 * Create directory structure for a route
 */
const ensureRouteDir = (route) => {
  if (route === '/') return BUILD_DIR;
  const routeDir = path.join(BUILD_DIR, route);
  fs.mkdirSync(routeDir, { recursive: true });
  return routeDir;
};

/**
 * Prerender without Puppeteer - creates route directories
 * with copies of index.html so the server can serve them.
 */
const prerenderSimple = () => {
  console.log('\\n=== VMukti Static Route Generator ===\\n');
  console.log(`Build directory: ${BUILD_DIR}`);
  console.log(`Routes to process: ${routes.length}\\n`);

  if (!fs.existsSync(BUILD_DIR)) {
    console.error('Error: build/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
  let processed = 0;
  let skipped = 0;

  for (const route of routes) {
    if (route === '/') {
      skipped++;
      continue;
    }

    const routeDir = ensureRouteDir(route);
    const routeIndexPath = path.join(routeDir, 'index.html');

    if (fs.existsSync(routeIndexPath)) {
      skipped++;
      continue;
    }

    fs.writeFileSync(routeIndexPath, indexHtml);
    processed++;
    console.log(`  [OK] ${route}`);
  }

  console.log(`\\n=== Done ===`);
  console.log(`Processed: ${processed} routes`);
  console.log(`Skipped: ${skipped} routes (already exist or root)\\n`);
};

/**
 * Generate a _headers file for Netlify/Vercel-style hosting
 */
const generateHeaders = () => {
  const headersPath = path.join(BUILD_DIR, '_headers');
  const headers = `# Cache static assets aggressively
/static/*
  Cache-Control: public, max-age=31536000, immutable

# Don't cache HTML pages
/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate

# Security headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
`;

  fs.writeFileSync(headersPath, headers);
  console.log('Generated _headers file for static hosting');
};

/**
 * Generate _redirects file for SPA routing on static hosts
 */
const generateRedirects = () => {
  const redirectsPath = path.join(BUILD_DIR, '_redirects');
  const redirects = `# SPA fallback - serve index.html for all routes
/*    /index.html   200
`;

  fs.writeFileSync(redirectsPath, redirects);
  console.log('Generated _redirects file for SPA fallback');
};

// Main
const main = () => {
  try {
    prerenderSimple();
    generateHeaders();
    generateRedirects();
    console.log('\\nPost-build processing complete!');
    console.log('\\nIMPORTANT: For full prerendering with JavaScript execution,');
    console.log('consider using one of these approaches:');
    console.log('  1. react-snap: npm install react-snap --save-dev');
    console.log('     Add "postbuild": "react-snap" to package.json scripts');
    console.log('  2. prerender.io: Sign up at prerender.io and add middleware');
    console.log('  3. Netlify prerendering: Enable in Netlify dashboard\\n');
  } catch (error) {
    console.error('Post-build error:', error);
    process.exit(1);
  }
};

main();
