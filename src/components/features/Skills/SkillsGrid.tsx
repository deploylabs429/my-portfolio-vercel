import type { ReactNode } from 'react';

import SkillList from '@/components/features/Skills/SkillList';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {categories.map((category) => (
            <div key={category.title} className="group">
              <SkillList
                icon={category.icon}
                title={category.title}
                gradient={category.gradient}
                skills={category.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
