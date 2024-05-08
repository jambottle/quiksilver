/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.sto-net.com',
        pathname: '/logos/sto',
      },
    ],
  },
};

export default nextConfig;
