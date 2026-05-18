import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/customer-summit-26",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
