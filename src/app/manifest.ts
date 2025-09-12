import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const name = 'Christopher Tanaka | Senior Software Engineer';
  const short_name = 'CT Portfolio';
  const theme_color = '#0b0b12';
  const background_color = '#0b0b12';

  return {
    name,
    short_name,
    start_url: '/',
    display: 'standalone',
    theme_color,
    background_color,
    description:
      'Senior Software Engineer with 12+ years building low-latency, AI-powered products and real-time collaboration tools.',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'maskable',
      },
    ],
  };
}
