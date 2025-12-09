/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend-gateway:5000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
