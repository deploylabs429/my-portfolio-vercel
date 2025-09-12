const HowIWork = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="how-i-work-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="how-i-work-title" className="text-xl md:text-2xl font-semibold mb-6">
          How I work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2 text-[var(--foreground)]">Product-first delivery</h3>
            <p className="text-sm text-[var(--muted)]">
              Partner closely with design and PM to ship high-impact features quickly and iterate
              with real user feedback.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2 text-[var(--foreground)]">Performance mindset</h3>
            <p className="text-sm text-[var(--muted)]">
              Profile, measure, and optimize—real-time, low-latency UI and scalable systems are my
              default.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2 text-[var(--foreground)]">Ownership & quality</h3>
            <p className="text-sm text-[var(--muted)]">
              End-to-end responsibility from data to UI; raise the bar on reliability,
              accessibility, and maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
