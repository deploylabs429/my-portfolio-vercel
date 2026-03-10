export const skillCategories = [
  {
    iconName: 'code',
    title: 'Frontend & UI Development',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS',
      'React.js, Next.js (Page & App Router), Vue.js, Angular.js',
      'Redux, React Query, Zustand, Context API',
      'TailwindCSS, Styled Components, CSS-in-JS, Material UI, Bootstrap, Storybook',
      'Figma Dev Mode, Code Connect, Simple Design System',
      'UI Performance Optimization, Rendering & Reconciliation, Virtualization',
      'Canvas API, WebGL, SVG, WebAssembly',
      'Accessibility (WCAG), Responsive Development, Cross-Browser Development',
    ],
  },
  {
    iconName: 'storage',
    title: 'Backend & APIs',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'Node.js, Express.js, NestJS, Python, Java, PHP, SQL',
      'REST APIs, GraphQL, WebSocket APIs, GraphQL Subscriptions, LiveGraph',
      'Data Pipelines, Event-Driven Architecture, RabbitMQ, Kafka',
      'OAuth2, JWT, SSO',
    ],
  },
  {
    iconName: 'psychology',
    title: 'AI/LLM & Advanced Systems',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'RAG, Multimodal systems, AI Inference Pipelines',
      'OpenAI Integration, LangChain, LangGraph',
      'Vector DBs: Pinecone, FAISS',
      'Cursor, AI-assisted development workflows',
      'Data visualization: D3.js, interactive dashboards, time-series analysis',
    ],
  },
  {
    iconName: 'cloud',
    title: 'DevOps & Infrastructure',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'AWS (EC2, S3, RDS, Lambda, CloudFront, Route 53), GCP, Azure',
      'Docker, Kubernetes, Terraform',
      'CI/CD: GitHub Actions, Jenkins',
      'Observability: Grafana',
      'Build tools: Webpack, Babel, npm/Yarn, Vite',
    ],
  },
  {
    iconName: 'security',
    title: 'Databases & Persistence',
    gradient: 'from-indigo-500 to-purple-500',
    skills: ['PostgreSQL, MySQL, MongoDB, Redis, Supabase, Firebase'],
  },
  {
    iconName: 'rocket',
    title: 'Collaboration, Leadership & Tooling',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Agile, Scrum, Kanban',
      'Cross-Functional Collaboration, Mentorship, Technical Leadership',
      'Rapid Prototyping, Startup Environments, Pair-programming',
      'Profiling & optimization: Lighthouse, Chrome tracing, virtualized lists',
    ],
  },
] as const;

export const proficiencyLevels = [
  { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'AI/ML', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps', level: 75, color: 'from-orange-500 to-red-500' },
] as const;
