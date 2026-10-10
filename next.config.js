/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/get-connectability',
        destination: 'https://script.google.com/macros/s/AKfycbz_b7hNBW35xJ9XhX_6xI0v3aLH87vsPAGNxSSfaf4mIXAT0yckCI9T7RlqPoh1zEPK/exec',
        permanent: false,
      },
    ];
  },
  // Payability sales page lives in public/payability.html
  async rewrites() {
    return [
      { source: '/payability', destination: '/payability.html' },
    ];
  },
}
module.exports = nextConfig