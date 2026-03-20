/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  trailingSlash: true,

  images: {
    // Issue #5 — Enable WebP/AVIF automatic conversion for next/image components
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dzs02ecai/**",
      },
      {
        protocol: "https",
        hostname: "www.vmukti.com",
      },
      {
        protocol: "https",
        hostname: "vmukti.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/googlef9501ef859b4f0e0.html",
        destination: "/api/google-verify",
      },
      {
        source: "/backend/:path*",
        destination: "https://vmukti.com/backend/:path*",
      },
    ];
  },

  async redirects() {
    return [
      // Domain redirect: vmukti.com → www.vmukti.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "vmukti.com" }],
        destination: "https://www.vmukti.com/:path*",
        permanent: true,
      },
      // Legacy page redirects (fixing 101 Soft 404s in GSC)
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/book-demo", destination: "/book-a-demo", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/career/", destination: "/careers", permanent: true },
      { source: "/about-vmukti", destination: "/about-us", permanent: true },
      { source: "/about-vmukti/", destination: "/about-us", permanent: true },
      { source: "/industries", destination: "/industry", permanent: true },
      // Old product URLs → new solution pages
      { source: "/products/vms", destination: "/products/vms-vas/", permanent: true },
      { source: "/products/edge-ai-camera", destination: "/solution/edge-ai", permanent: true },
      { source: "/products/edge-ai-camera/", destination: "/solution/edge-ai", permanent: true },
      { source: "/products/smart-city-camera", destination: "/industry/smart-city", permanent: true },
      { source: "/products/smart-city-camera/", destination: "/industry/smart-city", permanent: true },
      { source: "/products/face-recognation-camera", destination: "/solution/face-recognition", permanent: true },
      { source: "/products/face-recognation-camera/", destination: "/solution/face-recognition", permanent: true },
      { source: "/products/anpr-camera", destination: "/solution/anpr-lpr", permanent: true },
      { source: "/products/anpr-camera/", destination: "/solution/anpr-lpr", permanent: true },
      { source: "/products/ambicam-4g-camera", destination: "/Ambicam", permanent: true },
      { source: "/products/ambicam-4g-camera/", destination: "/Ambicam", permanent: true },
      { source: "/products/object-detection-camera", destination: "/solution/ai-video-analytics", permanent: true },
      { source: "/products/object-detection-camera/", destination: "/solution/ai-video-analytics", permanent: true },
      // Old regional URLs
      { source: "/video-surveillance-solutions-usa", destination: "/usa/video-surveillance-solutions", permanent: true },
      { source: "/video-surveillance-solutions-uk", destination: "/uk/video-surveillance-solutions", permanent: true },
      // Old blog slugs → new blog URLs
      { source: "/cloud-based-video-security-solution", destination: "/blog/cloud-based-video-surveillance-benefits", permanent: true },
      { source: "/cloud-based-video-security-solution/", destination: "/blog/cloud-based-video-surveillance-benefits", permanent: true },
      { source: "/best-live-streaming-services-provider-in-india/", destination: "/blog/best-live-streaming-services-provider-in-india", permanent: true },
      { source: "/10-great-advantages-of-remote-security-and-video-surveillance/", destination: "/blog/advantages-of-remote-security-and-video-surveillance", permanent: true },
      { source: "/artificial-intelligence-edge-ai-camera-solutions-with-video-monitoring-technology/", destination: "/solution/edge-ai", permanent: true },
      { source: "/7-benefits-of-ai-powered-cctv-cameras-for-business-surveillance/", destination: "/solution/ai-video-analytics", permanent: true },
      { source: "/the-latest-technology-of-cctv-surveillance-systems/", destination: "/blog/latest-technology-of-cctv-surveillance-systems", permanent: true },
      { source: "/best-streaming-engine/", destination: "/blog/best-streaming-engine-for-webcast", permanent: true },
      { source: "/exam-surveillance-solutions-ensuring-the-integrity-of-your-exams/", destination: "/industry/education", permanent: true },
      // Industry contact-us subpages → main contact page
      { source: "/industry/:name/contact-us", destination: "/contact-us", permanent: true },
      // Brand naming: smart-city → enterprise-campus
      { source: "/industry/smart-city", destination: "/industry/enterprise-campus", permanent: true },
      { source: "/industry/smart-city/", destination: "/industry/enterprise-campus/", permanent: true },
    ];
  },

  async headers() {
    // Issue #1 — Content-Security-Policy
    // 'unsafe-inline' is required for Chakra UI (emotion inline styles) and GTM inline bootstrap.
    // For a stricter setup, migrate to nonce-based CSP via Next.js middleware (Issue #7).
    const ContentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.clarity.ms https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://res.cloudinary.com https://*.clarity.ms https://www.googletagmanager.com https://www.vmukti.com https://vmukti.com",
      "connect-src 'self' https://www.googletagmanager.com https://*.clarity.ms https://vmukti.com https://www.vmukti.com https://res.cloudinary.com",
      "frame-src 'self' https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          // Issue #1 — CSP
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
          // Issue #2 — HSTS
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // Issue #3 — Clickjacking protection (already present, kept)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Issue #4 — MIME sniffing protection (already present, kept)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Issue #5 — Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Issue #6 — Permissions policy
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Issue #8 — Obfuscate server identity
          { key: "Server", value: "webserver" },
        ],
      },
      // Issue #9 — Cache-Control: no-cache for HTML/dynamic pages
      // Static assets under /_next/static/ already get immutable long-cache from Next.js
      {
        source: "/((?!_next/static|_next/image|favicon\\.ico|assets/).*)",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias["react-router-dom"] = path.resolve(
      __dirname,
      "lib/react-router-dom-mock.js"
    );
    return config;
  },

  transpilePackages: ["@chakra-ui/react", "@chakra-ui/next-js"],

  experimental: {
    largePageDataBytes: 512 * 1024,
  },
};

module.exports = nextConfig;