import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // CRITICAL FIX: Force CSS cache bypass for Railway deployment
  generateBuildId: async () => {
    return `build-${Date.now()}-css-fix`
  },
  // Remove problematic optimizeCss that causes Railway build failures
  // Ensure all CSS is generated for production
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  /* config options here */
};

export default nextConfig;
