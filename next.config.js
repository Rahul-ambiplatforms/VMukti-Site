/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  assetPrefix: "/vmukti-site3",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dzs02ecai/**',
      },
      {
        protocol: 'https',
        hostname: 'www.vmukti.com',
      },
      {
        protocol: 'https',
        hostname: 'vmukti.com',
      },
    ],
  },

  // Proxy API requests to backend
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://vmukti.com/backend/:path*',
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vmukti.com' }],
        destination: 'https://www.vmukti.com/:path*',
        permanent: true,
      },
    ];
  },

  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias['react-router-dom'] = require('path').resolve(__dirname, 'lib/react-router-dom-mock.js');
    return config;
  },

  // Transpile Chakra UI packages
  transpilePackages: ['@chakra-ui/react', '@chakra-ui/next-js'],

  // Increase memory for large data files
  experimental: {
    largePageDataBytes: 512 * 1024, // 512KB
  },
};

module.exports = nextConfig;
