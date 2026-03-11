/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  basePath: "/vmukti-site3",
  assetPrefix: "/vmukti-site3",
  trailingSlash: true,

  images: {
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
        source: "/backend/:path*",
        destination: "https://vmukti.com/backend/:path*",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "vmukti.com" }],
        destination: "https://www.vmukti.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
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