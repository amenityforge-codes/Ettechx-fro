/**
 * Central place to resolve the backend API base URL.
 *
 * This repo includes some legacy Vite-era code that used `import.meta.env.VITE_API_URL`.
 * Next.js does not provide `import.meta.env` during build/SSR, so we use `process.env`.
 *
 * Configure via `.env.local` (recommended):
 * - NEXT_PUBLIC_API_URL=http://localhost:3001/api
 * or point at production.
 */
const DEFAULT_API_BASE_URL = 'https://ettechx-backend-production.up.railway.app/api';

export function getApiBaseUrl(): string {
  const fromNextPublic = process.env.NEXT_PUBLIC_API_URL;
  if (fromNextPublic && fromNextPublic.trim()) return fromNextPublic.trim();

  // Back-compat: some environments might still set VITE_API_URL in Node.
  const fromViteStyle = process.env.VITE_API_URL;
  if (fromViteStyle && fromViteStyle.trim()) return fromViteStyle.trim();

  return DEFAULT_API_BASE_URL;
}

