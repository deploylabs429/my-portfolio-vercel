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
    company: 'ProductNow',
    title: 'Senior Software Engineer',
    period: 'Oct 2025 - Present',
    location: 'Miami, FL (Remote)',
    description:
      'Building an AI-native operating system for product & engineering teams, connecting plans, requirements, and execution into a shared intelligence layer.',
    logoName: 'productnow',
    bullets: [
      'Built an AI-native operating system for product & engineering teams, connecting plans, requirements, and execution into a shared intelligence layer that stays current in real time.',
      'Developed agentic "AI teammates" that plug into existing workflows to reduce coordination overhead (alignment, planning, handoffs, status updates).',
      'Shipped end-to-end features in a TypeScript monorepo stack (Next.js/NestJS), with a strong focus on UX clarity, performance, and reliability.',
      'Contributed to enterprise readiness: identity/SSO via Auth0, continuous security posture monitoring via Vanta, and auditability/access controls supporting SOC 2 Type II readiness.',
      'Partnered closely with product and design to translate messy strategy into crisp workflow primitives (strategy → roadmap → sprint planning → delivery).',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    iconName: 'flash',
  },
  {
    company: 'FoxyAI',
    title: 'Senior Software Engineer',
    period: 'Dec 2023 - Sep 2025',
    location: 'Salem, UT (Remote)',
    description:
      'Built and scaled AI-powered property intelligence dashboards and full-stack data flows, with multimodal search and subscription/billing.',
    logoName: 'foxyai',
    bullets: [
      'Built and maintained Next.js/TypeScript dashboards to visualize AI-powered property intelligence (condition/quality scores, damage detection, renovation forecasts, and 360° valuations).',
      'Led frontend modernization by migrating from Next.js Page Router to App Router, streamlining routing/data fetching and improving responsiveness.',
      'Integrated a multimodal, LLM-powered advanced search using RAG, enabling intuitive image-and-text queries across large-scale property datasets with more accurate, context-aware results.',
      'Developed full-stack data flows from image ingestion through AI inference to visual output, ensuring speed, reliability, and product alignment.',
      'Implemented a subscription and billing system using Stripe Checkout and a customer portal for plan management, invoices, and payments.',
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
      "Built and scaled Figma's real-time data fetching and collaboration stack (LiveGraph), sharding, and design-to-code workflows.",
    logoName: 'figma',
    bullets: [
      "Engineered LiveGraph, Figma's real-time data fetching layer on Postgres, enabling frontend subscriptions to GraphQL-like queries with JSON tree responses (UI updates in the order of milliseconds).",
      'Collaborated on scaling LiveGraph to support growth: client sessions tripled since 2021; view requests increased 5x; shifted backend from single Postgres to vertical+horizontal sharding with multiple replicas.',
      'Participated in DBProxy efforts: intercept SQL from app services, route queries to appropriate Postgres shards, support logical/physical sharding, query parsing/planning, and topology management.',
      'Integrated LiveGraph subscriptions in React/TypeScript, building custom hooks for real-time updates so components re-render automatically when subscribed data changes.',
      "Contributed to design-to-code infrastructure via Code Connect to map production component code into Figma's Dev Mode, reducing mismatch and accelerating handoff; practiced SDS (Simple Design System) patterns.",
      'Mentored junior engineers and collaborated cross-functionally to improve delivery and share best practices.',
    ],
    gradient: 'from-purple-500 to-pink-600',
    iconName: 'star',
  },
  {
    company: 'ElectrifAi',
    title: 'Full-Stack Engineer',
    period: 'Dec 2016 - Apr 2019',
    location: 'New York, NY',
    description:
      'Developed EMR frontends and healthcare data integrations to streamline clinician workflows.',
    logoName: 'electrifai',
    bullets: [
      'Developed EMR application frontends using React and TypeScript, leveraging Medplum to streamline clinician workflows.',
      'Implemented FHIR-based data handling and integrated HL7 v2 messaging pipelines to ensure real-time patient data interoperability.',
      'Collaborated with clinical informatics and stakeholders to deliver production-ready interfaces adhering to regulatory and workflow requirements.',
    ],
    gradient: 'from-pink-500 to-red-600',
    iconName: 'work',
  },
  {
    company: 'Google',
    title: 'Software Engineer',
    period: 'Dec 2013 - Nov 2016',
    location: 'Mountain View, CA',
    description:
      'Built internal web tools and experimentation systems used by advertiser platforms.',
    logoName: 'google',
    bullets: [
      'Joined as a Software Engineering Intern, collaborating on production projects and delivering feature work under mentorship over a 6-month period.',
      'Transitioned to a full-time Software Engineer after internship conversion, demonstrating strong ownership and impact early on.',
      'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms.',
      'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks, accelerating engineering velocity.',
    ],
    gradient: 'from-red-500 to-orange-600',
    iconName: 'star',
  },
];

export const educationData: readonly EducationItem[] = [
  {
    degree: "Master's degree in Computer Science",
    institution: 'The University of Tokyo',
    period: 'Apr 2011 - Mar 2013',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description:
      "Master's in Computer Science with focus on distributed systems, databases, and real-time collaboration tooling.",
    achievements: [
      'Designed and built a real-time collaboration prototype using WebSockets and Postgres to synchronize shared document state.',
      'Completed advanced coursework in Distributed Systems, Database Systems, Algorithms, and Human-Computer Interaction (HCI).',
      'Led a small capstone team to deliver an end-to-end web application with CI/CD, testing, and performance instrumentation.',
      'Presented project findings and live demos to faculty and industry partners, emphasizing scalability and developer ergonomics.',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    iconName: 'school',
  },
  {
    degree: "Bachelor's degree in Computer Science",
    institution: 'The University of Tokyo',
    period: 'Apr 2007 - Mar 2011',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description:
      "Bachelor's in Computer Science emphasizing software engineering fundamentals and systems programming.",
    achievements: [
      'Completed core CS curriculum: Data Structures & Algorithms, Operating Systems, Computer Networks, Compilers, and Databases.',
      'Built several full-stack projects and interactive UIs, practicing modern web patterns and clean component architecture.',
      'Collaborated on team projects and hackathon-style coursework, adopting Git-based workflows and code reviews.',
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
      'React.js, Next.js (Page & App Router), Vue.js, Angular.js',
      'Redux, React Query, Zustand, TailwindCSS, Styled Components, Material UI, Bootstrap',
      'Figma Dev Mode, Code Connect, Simple Design System',
      'Accessibility (WCAG), Responsive Development, Cross-Browser Development',
      'Canvas API, WebGL, SVG, WebAssembly',
    ],
  },
  {
    iconName: 'storage',
    title: 'Backend & APIs',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'Node.js, Express.js, NestJS, Python, Java, PHP, SQL',
      'REST APIs, GraphQL, WebSocket APIs, GraphQL Subscriptions, LiveGraph-like systems',
      'Data Pipelines, Event-Driven Architecture, RabbitMQ, Kafka',
      'OAuth2, JWT, SSO',
      'PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Redis',
    ],
  },
  {
    iconName: 'psychology',
    title: 'AI/LLM & Advanced Systems',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'RAG, Multimodal systems, AI Inference Pipelines',
      'OpenAI Integration, LangChain, LangGraph, Pinecone, FAISS',
      'Cursor, AI-assisted development workflows',
      'D3.js, interactive dashboards, time-series analysis',
    ],
  },
  {
    iconName: 'cloud',
    title: 'Cloud, DevOps & Infrastructure',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'AWS, GCP, Azure',
      'Docker, Kubernetes, Terraform',
      'CI/CD: GitHub Actions, Jenkins',
      'Observability: Grafana',
      'Auth0, Vanta, SOC 2 Type II readiness',
    ],
  },
] as const;
