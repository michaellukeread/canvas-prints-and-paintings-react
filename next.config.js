/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com']
  },
  reactStrictMode: true
  // webpack(config) {
  //   config.resolve.modules.push(__dirname)
  //   return config
  // }
}

module.exports = nextConfig
