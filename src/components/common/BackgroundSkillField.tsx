'use client';

import { useMemo } from 'react';

import { createPortal } from 'react-dom';

import SkillSwarm from '@/components/common/SkillSwarm';
import type { SkillKey } from '@/components/common/TechnologyLogos';

const BackgroundSkillField = () => {
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

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    >
      <SkillSwarm
        skills={allSkills}
        height={'100vh'}
        iconSize={34}
        speed={[0.25, 0.6]}
        className="w-screen h-screen"
        titlePrefix="Bg"
      />
    </div>,
    document.body,
  );
};

export default BackgroundSkillField;
