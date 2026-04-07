import type { ReactNode } from 'react';

import { homeHighlightsSection } from '@/lib/data/home';

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
    <section className="py-12 md:py-16" aria-labelledby="highlights-grid-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          id="highlights-grid-title"
          className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-2 text-center"
        >
          {homeHighlightsSection.title}
        </h2>
        <p className="text-sm md:text-base text-[var(--muted)] text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {homeHighlightsSection.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="group glass-card relative h-full flex flex-col items-center text-center p-7 md:p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--border-strong)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-[4.25rem] h-[4.25rem] shrink-0 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-md ring-1 ring-black/5 dark:ring-white/10 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                aria-hidden="true"
              >
                <div className="on-gradient">{highlight.icon}</div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[var(--foreground)] tracking-tight mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed max-w-sm mx-auto">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;
