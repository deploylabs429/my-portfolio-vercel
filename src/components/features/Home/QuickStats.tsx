interface StatItem {
  label: string;
  value: string | number;
}

interface QuickStatsProps {
  stats: ReadonlyArray<StatItem>;
}

const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <section className="py-16 md:py-20 relative" aria-labelledby="quick-stats-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="quick-stats-title" className="sr-only">
          Key stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-[var(--muted)] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
