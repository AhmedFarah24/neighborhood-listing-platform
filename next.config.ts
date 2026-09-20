import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS
    ? "/neighborhood-listing-platform"
    : "",
};

export default nextConfig;
