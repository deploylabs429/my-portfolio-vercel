import type { ReactNode } from 'react';

export interface SkillCategoryItem {
  title: string;
  gradient: string;
  icon: ReactNode;
  skills: ReadonlyArray<string>;
}

interface SkillsGridProps {
  categories: ReadonlyArray<SkillCategoryItem>;
}

const SkillsGrid = ({ categories }: SkillsGridProps) => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-[var(--muted)] text-lg">
            Comprehensive toolkit of modern technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="group">
              <div className="glass-card p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 group hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="on-gradient">{category.icon}</div>
                </div>

                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 text-center">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--muted)] text-sm leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
