import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), interest-cohort=(), usb=(), payment=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), display-capture=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  images: {
    // Add external domains here if needed, e.g. domains: ['images.example.com']
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom', 'react-icons'],
  },
  // Easier server deployments (optional, safe for Vercel too)
  output: process.env.VERCEL ? undefined : 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
