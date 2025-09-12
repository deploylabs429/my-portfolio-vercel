import type { ReactNode } from 'react';

import { MdCalendarToday, MdLocationOn } from 'react-icons/md';

export interface ExperienceItem {
  company: string;
  title: string;
  description: string;
  period: string;
  location: string;
  bullets: ReadonlyArray<string>;
  gradient: string;
  icon: ReactNode;
}

interface ExperienceListProps {
  exps: ReadonlyArray<ExperienceItem>;
}

const ExperienceList = ({ exps }: ExperienceListProps) => {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-[var(--muted)] text-lg">Building impactful solutions at scale</p>
        </div>

        <div className="space-y-12">
          {exps.map((exp) => (
            <div key={`${exp.company}-${exp.title}`} className="group">
              <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 hover:scale-[1.02]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Company Info */}
                  <div className="text-center lg:text-left">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="on-gradient">{exp.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-xl font-semibold gradient-text mb-2">{exp.title}</h4>
                    <p className="text-[var(--muted)] mb-4">{exp.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                        <MdCalendarToday className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                        <MdLocationOn className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      {exp.bullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 animate-slide-up"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[var(--muted)] leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
