import type { ReactNode } from 'react';

export interface ContactMethodItem {
  title: string;
  description: string;
  gradient: string;
  value: ReactNode;
  action: string;
  icon: ReactNode;
}

interface MethodGridProps {
  methods: ReadonlyArray<ContactMethodItem>;
}

const MethodGrid = ({ methods }: MethodGridProps) => {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methods.map((method) => (
            <div key={method.title} className="group">
              <a
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block glass-card p-6 rounded-2xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 group hover:scale-105 interactive-card h-full overflow-hidden"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="on-gradient">{method.icon}</div>
                </div>

                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:gradient-bg transition-all duration-300">
                  {method.title}
                </h3>

                <p className="text-[var(--muted)] text-sm text-center mb-3 transition-colors duration-300">
                  {method.description}
                </p>

                <div className="text-center w-full">
                  <span
                    className="inline-block max-w-full truncate align-middle text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--glass-border)] transition-all duration-300"
                    title={typeof method.value === 'string' ? method.value : undefined}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodGrid;
