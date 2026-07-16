import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/systems/llm-from-scratch",
        destination: "/#work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
