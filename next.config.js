/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai-everydays.s3.amazonaws.com',
        port: '',
        pathname: '/everydays-raw/**',
      },
      {
        protocol: 'https',
        hostname: 'ai-everydays.s3.amazonaws.com',
        port: '',
        pathname: '/profile/**',
      },
    ],
  },
}