/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.imgur.com",
      "avatars.githubusercontent.com"
    ],
  },
}

module.exports = nextConfig
