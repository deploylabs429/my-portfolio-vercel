import type { ReactNode } from 'react';

interface HighlightItem {
  title: string;
  description: string;
  gradient: string;
  icon: ReactNode;
}

interface HighlightsGridProps {
  highlights: ReadonlyArray<HighlightItem>;
}

const HighlightsGrid = ({ highlights }: HighlightsGridProps) => {
  return (
    <section
      className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      aria-label="Key strengths"
    >
      {highlights.map((highlight) => (
        <article
          key={highlight.title}
          className="glass-card p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 group hover:scale-[1.02]"
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
            aria-hidden="true"
          >
            <div className="on-gradient">{highlight.icon}</div>
          </div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2">{highlight.title}</h2>
          <p className="text-[var(--muted)] text-sm">{highlight.description}</p>
        </article>
      ))}
    </section>
  );
};

export default HighlightsGrid;
