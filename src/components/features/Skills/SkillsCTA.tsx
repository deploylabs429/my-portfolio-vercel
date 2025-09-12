import Link from 'next/link';

import { MdRocketLaunch } from 'react-icons/md';

const SkillsCTA = () => {
  return (
    <section className="relative py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-12 rounded-3xl border border-[var(--border)]">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
            Let&apos;s collaborate on your next project and bring your vision to life with
            cutting-edge technology.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center space-x-2 px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
          >
            <span>Start a Project</span>
            <MdRocketLaunch className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsCTA;
