export const skillCategories = [
  {
    iconName: 'code',
    title: 'Frontend & UI Development',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS',
      'React.js, Next.js (Page & App Router), Redux, React Query, Zustand, Context API',
      'TailwindCSS, Styled Components, CSS-in-JS, Material UI, Bootstrap, Storybook',
      'UI Performance Optimization, Rendering & Reconciliation, Virtualization',
      'Canvas API, WebGL, SVG, WebAssembly, WebSockets, WebRTC',
      'Accessibility (WCAG), Responsive Development, Cross-Browser Development',
    ],
  },
  {
    iconName: 'storage',
    title: 'Backend & APIs',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'Node.js, Express.js, Nest.js, Python, Java, SQL',
      'REST APIs, GraphQL, WebSocket, GraphQL Subscriptions, LiveGraph-like systems',
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
      'Data visualization: D3.js, interactive dashboards, time-series analysis',
    ],
  },
  {
    iconName: 'cloud',
    title: 'DevOps & Infrastructure',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'AWS: EC2, S3, RDS, Lambda, CloudFront, Route 53',
      'Docker, Kubernetes, Terraform',
      'CI/CD: GitHub Actions, Jenkins',
      'Observability: Prometheus, Grafana, ELK Stack',
      'Build tools: Webpack, Babel, npm/Yarn, Vite',
    ],
  },
  {
    iconName: 'security',
    title: 'Databases & Persistence',
    gradient: 'from-indigo-500 to-purple-500',
    skills: ['PostgreSQL, MySQL, MongoDB, Redis'],
  },
  {
    iconName: 'rocket',
    title: 'Collaboration, Leadership & Tooling',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Agile, Scrum, Kanban, Cross-Functional Collaboration, Mentorship, Technical Leadership',
      'Rapid Prototyping, Startup Environments',
      'Profiling & optimization: Lighthouse, Chrome tracing, virtualized lists',
      'Git workflows, cross-browser debugging, responsive design',
    ],
  },
] as const;

export const proficiencyLevels = [
  { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'AI/ML', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps', level: 75, color: 'from-orange-500 to-red-500' },
] as const;
