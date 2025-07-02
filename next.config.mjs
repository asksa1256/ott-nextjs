/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        pathname: "/watchit/**", // 모든 하위 이미지 허용
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/films/:id",
        destination: "/movies/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
