/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  cssModules: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  optimizeFonts: false,
  compiler: {
    styledComponents: true,
  },
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};

module.exports = nextConfig;
