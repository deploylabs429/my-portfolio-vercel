import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function TwitterImage() {
  const title = 'Christopher Tanaka';
  const subtitle = 'Senior Software Engineer • AI • Realtime UI';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #141826 0%, #0b0b12 100%)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'block',
            padding: '6px 12px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            color: '#cbd5e1',
            fontSize: 24,
          }}
        >
          Portfolio
        </div>
        <h1
          style={{
            margin: '24px 0 8px',
            fontSize: 72,
            lineHeight: 1.1,
            color: 'white',
            fontWeight: 800,
            letterSpacing: '-1.2px',
          }}
        >
          {title}
        </h1>
        <p style={{ color: '#d1d5db', fontSize: 32 }}>{subtitle}</p>
      </div>
    ),
    {
      ...size,
    },
  );
}
