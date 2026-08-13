import type { NextConfig } from "next";

const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = pagesBasePath
  ? {
      output: "export",
      basePath: pagesBasePath,
      assetPrefix: pagesBasePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
