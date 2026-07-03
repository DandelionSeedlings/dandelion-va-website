/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/get-connectability',
        destination: 'https://script.google.com/macros/s/AKfycbz_b7hNBW35xJ9XhX_6xI0v3aLH87vsPAGNxSSfaf4mIXAT0yckCI9T7RlqPoh1zEPK/exec',
        permanent: false,
      },
    ];
  },
}
module.exports = nextConfig