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
    company: 'NextPay',
    title: 'Senior Software Engineer',
    period: 'Sep 2023 - Mar 2026',
    location: 'Pasig City, Metro Manila (Remote)',
    description:
      'Built and scaled backend payment, payroll, disbursement systems and event-driven architecture for high-volume financial operations.',
    logoName: 'productnow',
    bullets: [
      'Led the design and delivery of Java microservices and REST/gRPC APIs for payroll, disbursement, approvals, and payment operations across 30+ financial workflows.',
      'Increased payroll and disbursement processing throughput by 30% through batch execution redesign, parallelized worker jobs, and PostgreSQL query optimization for workloads handling 500,000+ transaction events per month.',
      'Reduced month-end reconciliation exceptions by 25% through improved data modeling, ETL validation, idempotency checks, and audit-ready transaction tracking across Redis and Snowflake pipelines.',
      'Implemented event-driven processing with Kafka and RabbitMQ for webhooks, notifications, approval events, and settlement jobs supporting 10,000+ daily payout and payroll actions.',
      'Built an internal AI-assisted operations tool using FastAPI, LangChain, and RAG, reducing payout and payroll incident investigation time by an average of 20 minutes.',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    iconName: 'flash',
  },
  {
    company: 'Employment Hero',
    title: 'Senior Full Stack Engineer',
    period: 'Jan 2021 - Aug 2023',
    location: 'Sydney, Australia (Remote)',
    description:
      'Delivered full-stack HR and payroll features supporting multi-tenant product workflows and internal operational tooling.',
    logoName: 'foxyai',
    bullets: [
      'Built full-stack features for HR, payroll, and employee management workflows using React and Angular, supporting 1,000+ business customers and employees.',
      'Developed Go backend services and API integrations for payroll data handling, employee lifecycle workflows, and shared platform services managing 100,000+ employee records.',
      'Created Python internal tools and enhanced Django services for reporting, approvals, leave management, and operational workflows across core product modules.',
      'Strengthened authentication and access-control flows using OAuth2 and RBAC, reducing access-related configuration issues by 15% across customer-facing and internal admin workflows.',
      'Improved load times on high-traffic admin and payroll screens by 1.6 seconds and cut regression defects by 50% through stronger automated testing and tighter CI checks.',
    ],
    gradient: 'from-indigo-500 to-purple-600',
    iconName: 'work',
  },
  {
    company: 'Toggl',
    title: 'Software Engineer',
    period: 'Aug 2017 - Dec 2020',
    location: 'Tallinn, Estonia (Remote)',
    description:
      'Developed time tracking and reporting systems with a focus on performance, data consistency, and release quality.',
    logoName: 'electrifai',
    bullets: [
      'Developed and maintained features for time tracking, reporting, and team productivity workflows using C#, supporting 10,000+ active users.',
      'Strengthened data consistency across timers, time entries, summaries, and reporting flows by refining API contracts, Redis caching, and background synchronization behavior.',
      'Cut p95 response times by 150 ms, reducing key dashboard and summary requests to about 250 ms in production.',
      'Improved reporting accuracy and export reliability by optimizing data access patterns across MySQL-backed workloads.',
      'Reduced recurring customer-reported bugs by 5 issues per month through stronger test coverage, tighter triage, and improved release quality.',
    ],
    gradient: 'from-purple-500 to-pink-600',
    iconName: 'star',
  },
];

export const educationData: readonly EducationItem[] = [
  {
    degree: "Bachelor's degree in Computer Science",
    institution: 'University of the Philippines Diliman',
    period: 'Aug 2013 - Jul 2017',
    location: 'Quezon City, Metro Manila',
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
      'Node.js, Express.js, NestJS, Python, Ruby, Java, PHP, SQL',
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
