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
};

module.exports = nextConfig;
