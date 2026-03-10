import { MdCalendarToday, MdRocketLaunch } from 'react-icons/md';

const AboutHero = () => {
  return (
    <section className="relative py-20 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center gradient-bg">
            <MdRocketLaunch className="w-6 h-6 on-gradient" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text">About Me</h1>
        </div>

        <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
          A seasoned software engineer with 12+ years of experience building innovative solutions at
          the intersection of AI, real-time systems, and collaborative tools.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/christophertanaka42/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl gradient-bg on-gradient font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus-ring"
            aria-label="Schedule a chat"
          >
            <MdCalendarToday className="w-4 h-4" />
            <span>Schedule a Chat</span>
          </a>
          <span
            aria-label="Open to remote work"
            className="text-xs md:text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]"
          >
            Open to remote work
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
