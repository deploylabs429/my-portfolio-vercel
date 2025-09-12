import type { ReactNode } from 'react';

import { MdCalendarToday, MdEmojiEvents, MdLocationOn } from 'react-icons/md';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: ReadonlyArray<string>;
  gradient: string;
  icon: ReactNode;
}

interface EducationListProps {
  edus: ReadonlyArray<EducationItem>;
}

const EducationList = ({ edus }: EducationListProps) => {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Education</h2>
          <p className="text-[var(--muted)] text-lg">
            Strong academic foundation from world-class institutions
          </p>
        </div>

        <div className="space-y-12">
          {edus.map((edu) => (
            <div key={`${edu.degree}-${edu.institution}`} className="group">
              <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 hover:scale-[1.02]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Education Info */}
                  <div className="text-center lg:text-left">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${edu.gradient} rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="on-gradient">{edu.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold gradient-text mb-4">{edu.institution}</h4>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                        <MdCalendarToday className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                        <MdLocationOn className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-2">
                    <p className="text-[var(--muted)] leading-relaxed text-lg mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="text-lg font-semibold text-[var(--foreground)] mb-4 flex items-center space-x-2">
                        <MdEmojiEvents className="w-5 h-5 text-yellow-400" />
                        <span>Key Achievements</span>
                      </h5>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 animate-slide-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                            <span className="text-[var(--muted)]">{achievement}</span>
                          </div>
                        ))}
                      </div>
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

export default EducationList;
