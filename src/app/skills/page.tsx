import type { Metadata } from 'next';

import JsonLd from '@/components/common/JsonLd';
import PageWrapper from '@/components/common/PageWrapper';
import ProficiencyGrid from '@/components/features/Skills/ProficiencyGrid';
import SkillsCTA from '@/components/features/Skills/SkillsCTA';
import SkillsGrid from '@/components/features/Skills/SkillsGrid';
import SkillsHero from '@/components/features/Skills/SkillsHero';
import { proficiencyLevels, skillCategories as skillCategoriesData } from '@/lib/data/skills';
import { renderIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Skills | Christopher Tanaka',
  description:
    'Technical arsenal across frontend, backend, AI/ML, and DevOps. Explore categorized skills and proficiency levels.',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    url: '/skills',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const revalidate = 86400;

const Skills = () => {
  const skillCategories = skillCategoriesData.map((c) => ({
    ...c,
    icon: renderIcon(c.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Skills',
          url: `${baseUrl}/skills`,
          hasPart: skillCategories.map((c) => ({
            '@type': 'ItemList',
            name: c.title,
            itemListElement: c.skills.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s,
            })),
          })),
        }}
      />
      {/* Hero Section */}
      <SkillsHero />

      {/* Skills Grid */}
      <SkillsGrid categories={skillCategories} />

      {/* Proficiency Overview */}
      <ProficiencyGrid levels={proficiencyLevels} />

      {/* Call to Action */}
      <SkillsCTA />
    </PageWrapper>
  );
};

export default Skills;
