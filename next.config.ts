import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cal-storm-case-study",
  assetPrefix: "/cal-storm-case-study",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
