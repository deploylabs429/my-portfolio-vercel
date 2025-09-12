'use client';

import { useEffect, useMemo, useState } from 'react';

import { createPortal } from 'react-dom';

import SkillSwarm from '@/components/common/SkillSwarm';
import type { SkillKey } from '@/components/common/TechnologyLogos';

const BackgroundSkillField = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.inset = '0';
    el.style.zIndex = '-10';
    el.style.pointerEvents = 'none';
    el.style.opacity = '0.7';
    document.body.appendChild(el);
    setContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  const allSkills: SkillKey[] = useMemo(
    () => [
      'react',
      'typescript',
      'javascript',
      'html5',
      'css3',
      'sass',
      'nodejs',
      'express',
      'python',
      'csharp',
      'rails',
      'aiml',
      'webgl',
      'svg',
      'wasm',
      'webrtc',
      'nextjs',
      'tailwind',
      'mui',
      'storybook',
      'aws',
      'docker',
      'kubernetes',
      'redis',
      'postgres',
      'mongodb',
      'mysql',
      'firebase',
      'supabase',
      'prisma',
      'graphql',
      'redux',
      'vite',
      'webpack',
      'babel',
      'npm',
      'yarn',
      'threejs',
      'd3',
      'openai',
      'github',
      'githubactions',
      'jenkins',
      'jest',
      'testinglibrary',
      'cypress',
      'lighthouse',
    ],
    [],
  );

  if (!container) return null;

  return createPortal(
    <SkillSwarm
      skills={allSkills}
      height={'100vh'}
      iconSize={34}
      speed={[0.25, 0.6]}
      className="w-screen h-screen"
      titlePrefix="Bg"
    />,
    container,
  );
};

export default BackgroundSkillField;
