/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mastodon.social', 'files.mastodon.social'],
  },
}

module.exports = nextConfig
