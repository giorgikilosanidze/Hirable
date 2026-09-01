import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Where Google serves account avatars from.
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
