/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "i.imgur.com",
      "avatars.githubusercontent.com"
    ],
  },
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig
