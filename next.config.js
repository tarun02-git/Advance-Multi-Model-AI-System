/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/langflow/:path*',
        destination: 'http://localhost:7860/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 