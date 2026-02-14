#!/usr/bin/env node
/**
 * VMukti SEO Audit Script
 *
 * Quick automated check of critical SEO elements.
 * Run: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.vmukti.com';
const BUILD_DIR = path.join(process.cwd(), 'build');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

let passed = 0;
let failed = 0;
let warnings = 0;

const check = (name, condition, message) => {
  if (condition) {
    console.log(`  \x1b[32m✓\x1b[0m ${name}`);
    passed++;
  } else {
    console.log(`  \x1b[31m✗\x1b[0m ${name} — ${message}`);
    failed++;
  }
};

const warn = (name, condition, message) => {
  if (condition) {
    console.log(`  \x1b[32m✓\x1b[0m ${name}`);
    passed++;
  } else {
    console.log(`  \x1b[33m⚠\x1b[0m ${name} — ${message}`);
    warnings++;
  }
};

console.log('\n=== VMukti SEO Audit ===\n');

// 1. Check public directory files
console.log('\x1b[36m1. Static Files\x1b[0m');
check('robots.txt exists', fs.existsSync(path.join(PUBLIC_DIR, 'robots.txt')), 'Create public/robots.txt');
check('sitemap.xml exists', fs.existsSync(path.join(PUBLIC_DIR, 'sitemap.xml')), 'Run: npm run generate-sitemap');
check('manifest.json exists', fs.existsSync(path.join(PUBLIC_DIR, 'manifest.json')), 'Create public/manifest.json');
check('favicon.ico exists', fs.existsSync(path.join(PUBLIC_DIR, 'favicon.ico')), 'Add favicon.ico to public/');

// 2. Check index.html
console.log('\n\x1b[36m2. index.html SEO Elements\x1b[0m');
const indexHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8');

check('Has <title> tag', indexHtml.includes('<title>'), 'Add <title> to index.html');
check('Has meta description', indexHtml.includes('meta name="description"'), 'Add meta description');
check('Has meta viewport', indexHtml.includes('meta name="viewport"'), 'Add viewport meta');
check('Has OG title', indexHtml.includes('og:title'), 'Add og:title meta');
check('Has OG description', indexHtml.includes('og:description'), 'Add og:description meta');
check('Has OG image', indexHtml.includes('og:image'), 'Add og:image meta');
check('Has canonical link', indexHtml.includes('rel="canonical"'), 'Add canonical link');
check('Has lang attribute', indexHtml.includes('lang='), 'Add lang="en" to <html>');
check('Has charset', indexHtml.includes('charset'), 'Add charset meta');
check('Has JSON-LD script', indexHtml.includes('application/ld+json'), 'Add structured data');
check('Has Twitter card meta', indexHtml.includes('twitter:card'), 'Add Twitter card meta');
warn('Has noscript fallback', indexHtml.includes('<noscript>'), 'Add noscript content for crawlers');
warn('Has preconnect hints', indexHtml.includes('rel="preconnect"'), 'Add preconnect for external domains');

// 3. Check robots.txt content
console.log('\n\x1b[36m3. robots.txt Content\x1b[0m');
const robotsTxt = fs.readFileSync(path.join(PUBLIC_DIR, 'robots.txt'), 'utf8');
check('Has User-agent', robotsTxt.includes('User-agent'), 'Add User-agent directive');
check('Has Sitemap reference', robotsTxt.includes('Sitemap:'), 'Add Sitemap URL');
check('Blocks admin routes', robotsTxt.includes('Disallow: /admin'), 'Block admin routes');
warn('Has crawl-delay', robotsTxt.includes('Crawl-delay'), 'Consider adding Crawl-delay');

// 4. Check sitemap.xml
console.log('\n\x1b[36m4. sitemap.xml Content\x1b[0m');
if (fs.existsSync(path.join(PUBLIC_DIR, 'sitemap.xml'))) {
  const sitemapXml = fs.readFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), 'utf8');
  check('Valid XML declaration', sitemapXml.includes('<?xml'), 'Add XML declaration');
  check('Has urlset namespace', sitemapXml.includes('sitemaps.org'), 'Use proper namespace');
  check('Has homepage URL', sitemapXml.includes(SITE_URL), 'Add homepage URL');

  const urlCount = (sitemapXml.match(/<url>/g) || []).length;
  check(`Has multiple URLs (${urlCount})`, urlCount > 5, `Only ${urlCount} URLs found — add more pages`);
  check('Has <lastmod> dates', sitemapXml.includes('<lastmod>'), 'Add lastmod dates');
  check('Has <changefreq>', sitemapXml.includes('<changefreq>'), 'Add changefreq');
  check('Has <priority>', sitemapXml.includes('<priority>'), 'Add priority values');
}

// 5. Check SEO components
console.log('\n\x1b[36m5. SEO Components\x1b[0m');
const srcDir = path.join(process.cwd(), 'src');
check('SEO component exists', fs.existsSync(path.join(srcDir, 'components/SEO/SEO.jsx')), 'Create SEO.jsx component');
check('SEO config exists', fs.existsSync(path.join(srcDir, 'config/seo-config.js')), 'Create seo-config.js');
check('SchemaMarkup exists', fs.existsSync(path.join(srcDir, 'components/SEO/SchemaMarkup.jsx')), 'Create SchemaMarkup.jsx');
check('SEORouter exists', fs.existsSync(path.join(srcDir, 'components/SEO/SEORouter.jsx')), 'Create SEORouter.jsx');
warn('OptimizedImage exists', fs.existsSync(path.join(srcDir, 'components/SEO/OptimizedImage.jsx')), 'Create OptimizedImage.jsx for CWV');
warn('WebVitals reporter exists', fs.existsSync(path.join(srcDir, 'components/SEO/WebVitals.js')), 'Create WebVitals.js for monitoring');

// Summary
console.log('\n\x1b[36m=== Summary ===\x1b[0m');
console.log(`  \x1b[32m✓ Passed: ${passed}\x1b[0m`);
console.log(`  \x1b[33m⚠ Warnings: ${warnings}\x1b[0m`);
console.log(`  \x1b[31m✗ Failed: ${failed}\x1b[0m`);
console.log(`  Total: ${passed + warnings + failed}\n`);

if (failed > 0) {
  console.log('\x1b[31mSEO audit found issues. Fix the failed checks above.\x1b[0m\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\x1b[33mSEO audit passed with warnings. Consider fixing them.\x1b[0m\n');
} else {
  console.log('\x1b[32mAll SEO checks passed!\x1b[0m\n');
}
