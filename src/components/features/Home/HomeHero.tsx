import Link from 'next/link';

import { MdAutoAwesome, MdKeyboardArrowDown } from 'react-icons/md';

import ProfileAvatar from '@/components/features/Home/ProfileAvatar';

const HomeHero = () => {
  return (
    <section
      className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          {
            key: 'top-left',
            delay: 0,
            className:
              'top-20 left-6 md:left-20 w-56 md:w-72 h-56 md:h-72 from-indigo-500/20 to-purple-600/20',
          },
          {
            key: 'bottom-right',
            delay: 2,
            className:
              'bottom-20 right-6 md:right-20 w-72 md:w-96 h-72 md:h-96 from-purple-500/20 to-pink-600/20',
          },
          {
            key: 'center',
            delay: 4,
            className:
              'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 from-blue-500/10 to-cyan-500/10',
          },
        ].map((b) => (
          <div
            key={b.key}
            className={`absolute bg-gradient-to-br ${b.className} rounded-full blur-3xl animate-float`}
            style={{ animationDelay: `${b.delay}s` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <header className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Profile Avatar */}
        <ProfileAvatar />

        {/* Headline & Summary */}
        <div className="mt-10 md:mt-12 max-w-4xl mx-auto">
          <h1 id="home-hero-title" className="text-3xl md:text-5xl font-bold tracking-tight">
            Building low-latency, AI-powered products
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-[var(--muted)] leading-relaxed animate-fade-in-scale">
            Senior Software Engineer with{' '}
            <span className="gradient-text font-semibold">12+ years </span>
            delivering real-time collaboration, high-performance UI, and production ML integrations
            for customer-facing products.
          </p>
          <div className="mt-4 flex justify-center">
            <span
              aria-label="Open to remote work"
              className="text-xs md:text-sm text-[var(--muted)] px-3 py-1 rounded-full border bg-[var(--glass-bg)] border-[var(--glass-border)]"
            >
              Open to remote work
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
              aria-label="Contact me"
            >
              <span className="flex items-center gap-2">
                <span>Start a project</span>
                <MdAutoAwesome className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/about"
              className="group px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
              aria-label="View experience"
            >
              <span className="flex items-center gap-2">
                <span>View experience</span>
                <MdKeyboardArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center border-[var(--border)]">
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-[var(--foreground)]/60"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
