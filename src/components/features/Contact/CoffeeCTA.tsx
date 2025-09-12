import { MdCoffee } from 'react-icons/md';

const CoffeeCTA = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-12 rounded-3xl border border-[var(--border)] text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <MdCoffee className="w-10 h-10 on-gradient" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Let&apos;s Grab a Coffee
          </h2>

          <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
            I&apos;m always open to meeting new people and discussing exciting opportunities.
            Whether it&apos;s a virtual coffee chat or a quick call, I&apos;d love to connect and
            explore how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:christophertanaka42@gmail.com"
              className="px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
            >
              Schedule a Chat
            </a>
            <a
              href="/about"
              className="px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCTA;
