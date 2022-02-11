const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

module.exports = withVanillaExtract(nextConfig)
