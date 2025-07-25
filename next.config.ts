import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    experimental: {
      caseSensitiveRoutes: false,
      optimizeCss: false, // Try disabling if styles break
    }
};

export default nextConfig;
