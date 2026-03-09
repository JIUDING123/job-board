import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: true,
  },
  // Add HTTP proxy configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:7890/:path*',
      },
    ]
  },
}

export default nextConfig
