/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname: 'piped.video'
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-us.com'
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn.com'
      }
    ]
  }
};

export default nextConfig;
