import Link from 'next/link';

const HomeCTA = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="cta-title">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 id="cta-title" className="text-xl md:text-2xl font-semibold">
          Let’s build something great
        </h2>
        <p className="text-[var(--muted)] mt-2 text-sm md:text-base">
          Open to Senior/Staff Frontend or Full-Stack roles focused on real-time, AI, or complex UI.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
            aria-label="Contact me"
          >
            <span className="flex items-center gap-2">
              <span>Get in touch</span>
            </span>
          </Link>
          <Link
            href="/about"
            className="group px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
            aria-label="View experience"
          >
            <span className="flex items-center gap-2">
              <span>See experience</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
