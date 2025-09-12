import type { BrandName, IconName } from '@/lib/icons';

type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  logoName: BrandName;
  bullets: readonly string[];
  gradient: string;
  iconName: IconName;
};

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  logoName: BrandName;
  description: string;
  achievements: readonly string[];
  gradient: string;
  iconName: IconName;
};

type SkillCategory = {
  iconName: IconName;
  title: string;
  gradient: string;
  skills: readonly string[];
};

export const experienceData: readonly ExperienceItem[] = [
  {
    company: 'FoxyAI',
    title: 'Senior Software Engineer',
    period: 'Dec 2023 - Present',
    location: 'Remote',
    description: 'PropTech Innovation - Building AI-powered Visual Property Intelligence systems',
    logoName: 'foxyai',
    bullets: [
      'Built React/TypeScript dashboards for AI-powered Visual Property Intelligence including Condition Scores, Quality Scores, object/damage detection, renovation forecasts, and 360° Property Valuations',
      'Integrated multimodal, GPT-powered Advanced Search feature enabling intuitive image-and-text search across large-scale property datasets',
      'Optimized Canvas/WebGL rendering pipelines reducing frontend latency and delivering responsive, high-resolution model outputs',
      'Developed full-stack flows from image ingestion through AI inference to visual output ensuring speed, reliability, and product alignment',
      'Designed subscription and payment system using Stripe with customer portal for plan management, invoices, and billing methods',
      'Collaborated across teams to build Quality Control module reducing manual review time by ~50% for inspection and lending workflows',
    ],
    gradient: 'from-indigo-500 to-purple-600',
    iconName: 'work',
  },
  {
    company: 'Figma',
    title: 'Senior Full-Stack Engineer',
    period: 'May 2019 - Dec 2023',
    location: 'San Francisco, CA',
    description:
      'Design Collaboration Platform - Scaling real-time multiplayer editing infrastructure',
    logoName: 'figma',
    bullets: [
      'Engineered real-time multiplayer editing infrastructure leveraging WebSockets, custom sync logic (OT/CRDT-inspired), and WebAssembly-based performance components',
      'Led Canvas rendering optimizations reducing load and render latency by 30%+ through refactoring rendering pipelines and minimizing redraws',
      'Built robust front-end and backend services (Node.js, Python, React/TypeScript) powering collaborative Canvas UI updates and conflict resolution',
      'Scaled performance testing infrastructure from single MacBook to dual-system CI pipeline with GPU-accelerated VMs enabling performance guardrails under 10-minute pulls',
      'Helped shape design-system collaboration tools and workflows pairing closely with product and design teams to resolve nuanced UX conflicts',
    ],
    gradient: 'from-purple-500 to-pink-600',
    iconName: 'star',
  },
  {
    company: 'ElectrifAi',
    title: 'Senior Frontend Engineer',
    period: 'Dec 2016 - Apr 2019',
    location: 'New York, NY',
    description: 'Enterprise AI Solutions - Building AI/ML-powered analytics interfaces',
    logoName: 'electrifai',
    bullets: [
      'Built React/TypeScript dashboards transforming AI/ML outputs (CV, NLP) into clear analytics interfaces for Spend, Demand Forecasting, and Contract Analytics',
      'Integrated backend pipelines (Spark, Kubernetes, Python) to consume ML-driven APIs supporting corporate spend visibility and contract insights',
      'Delivered modular client-facing products with consistent 5x ROI within 6-8 weeks accelerating enterprise decision-making and operational efficiency',
      'Partnered with domain experts across finance, retail, and logistics translating business needs into polished, production-grade frontend experiences',
    ],
    gradient: 'from-pink-500 to-red-600',
    iconName: 'work',
  },
  {
    company: 'Google',
    title: 'Software Engineer',
    period: 'May 2013 - Nov 2016',
    location: 'Mountain View, CA',
    description: 'Search & Advertising - Internal tools and experimentation infrastructure',
    logoName: 'google',
    bullets: [
      'Joined as Software Engineering Intern collaborating on production projects and delivering feature work under mentorship over 12-week period',
      'Transitioned to full-time Software Engineer after internship conversion demonstrating strong ownership and performance early on',
      'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms',
      'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks accelerating engineering velocity',
    ],
    gradient: 'from-red-500 to-orange-600',
    iconName: 'star',
  },
];

export const educationData: readonly EducationItem[] = [
  {
    degree: "Master's degree in Computer Science",
    institution: 'University of Tokyo',
    period: 'Apr 2011 - Mar 2013',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description:
      'Advanced studies in algorithms, machine learning, and software engineering. Research focused on distributed systems and performance optimization.',
    achievements: [
      'Graduated with honors',
      'Published 2 research papers',
      'Teaching assistant for Data Structures',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    iconName: 'school',
  },
  {
    degree: "Bachelor's degree in Computer Science",
    institution: 'University of Tokyo',
    period: 'Apr 2007 - Mar 2011',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description:
      'Comprehensive foundation in computer science fundamentals, mathematics, and programming. Active participation in coding competitions and hackathons.',
    achievements: [
      "Dean's List recipient",
      'Computer Science Society President',
      '3rd place in ACM Programming Contest',
    ],
    gradient: 'from-purple-500 to-pink-500',
    iconName: 'book',
  },
] as const;

export const aboutSkillCategories: readonly SkillCategory[] = [
  {
    iconName: 'code',
    title: 'Frontend & UI Development',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS',
      'React, Next.js, Redux, Context API, Zustand, Storybook, Material UI, TailwindCSS',
      'Canvas API, WebGL, SVG, WebAssembly, WebSockets, WebRTC',
    ],
  },
  {
    iconName: 'storage',
    title: 'Backend & APIs',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'Node.js, Express.js, Python, C#, Ruby on Rails',
      'REST, GraphQL, AI/ML/CV model endpoints, real-time services (WebSockets)',
    ],
  },
  {
    iconName: 'psychology',
    title: 'AI/ML & Data Visualization',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'TensorFlow integration, NLP/CV model pipelines',
      'D3.js, financial time-series analysis, interactive dashboards',
      'GPT-powered multimodal search, Visual Property Intelligence UIs',
    ],
  },
  {
    iconName: 'cloud',
    title: 'DevOps & Infrastructure',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'Docker, Kubernetes, AWS (EC2, ELB, Redis), serverless',
      'CI/CD pipelines (Jenkins, GitHub Actions), Storybook snapshot testing',
      'Build tools: Webpack, Babel, npm/Yarn, Vite',
    ],
  },
] as const;
