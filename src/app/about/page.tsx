import type { Metadata } from 'next';

import JsonLd from '@/components/common/JsonLd';
import PageWrapper from '@/components/common/PageWrapper';
import AboutHero from '@/components/features/About/AboutHero';
import EducationList from '@/components/features/About/EducationList';
import ExperienceList from '@/components/features/About/ExperienceList';
import SkillsGrid from '@/components/features/About/SkillsGrid';
import { aboutSkillCategories, educationData, experienceData } from '@/lib/data/about';
import { renderBrandIcon, renderIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'About | Christopher Tanaka',
  description:
    'Professional experience, education, and technical strengths of Christopher Tanaka, Senior Software Engineer.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const revalidate = 86400;

const About = () => {
  const exps = experienceData.map((e) => ({
    ...e,
    icon: renderBrandIcon(e.logoName, 'w-8 h-8'),
  }));
  const edus = educationData.map((e) => ({
    ...e,
    icon: renderBrandIcon(e.logoName, 'w-8 h-8'),
  }));
  const skillCategories = aboutSkillCategories.map((c) => ({
    ...c,
    icon: renderIcon(c.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const email = 'christophertanaka42@gmail.com';
  const phone = '425-565-3249';
  const website = 'https://himalayas.app/@christophertanaka';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Tanaka',
          jobTitle: 'Senior Software Engineer',
          url: `${baseUrl}/about`,
          email: `mailto:${email}`,
          telephone: phone,
          sameAs: [website],
          alumniOf: educationData.map((e) => ({
            '@type': 'CollegeOrUniversity',
            name: e.institution,
          })),
          worksFor: experienceData.map((e) => ({ '@type': 'Organization', name: e.company })),
        }}
      />
      {/* Hero Section */}
      <AboutHero />

      {/* Experience Section */}
      <ExperienceList exps={exps} />

      {/* Education Section */}
      <EducationList edus={edus} />

      {/* Skills Section */}
      <SkillsGrid categories={skillCategories} />
    </PageWrapper>
  );
};

export default About;
