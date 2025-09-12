import type { ReactElement } from 'react';

// Server component to inject JSON-LD structured data
type JsonLdProps = { data: Record<string, unknown> };

const JsonLd = ({ data }: JsonLdProps): ReactElement => {
  const json = JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
};

export default JsonLd;
