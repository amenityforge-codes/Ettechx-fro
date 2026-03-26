/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Canonicals should be explicit per-page; avoid automatic trailing slashes.
  trailingSlash: false,
  // This repo lives in a subfolder on disk; explicitly set tracing root to avoid lockfile inference issues.
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
};

export default nextConfig;

