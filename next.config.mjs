/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //     },
  //   ],
  // },
  async redirects() {
    return [
      {
        source: "/products/delete_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/delete_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
