const { withTsGql } = require('@ts-gql/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTsGql(nextConfig)
