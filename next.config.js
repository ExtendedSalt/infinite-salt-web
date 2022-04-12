/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// const { i18n } = require('./next-i18next.config')

module.exports = ({
  // i18n,
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
      'lh3.googleusercontent.com'
    ]},
  optimizeFonts: true,
  
})

