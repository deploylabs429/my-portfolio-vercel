export const skillCategories = [
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
  {
    iconName: 'security',
    title: 'Databases & Persistence',
    gradient: 'from-indigo-500 to-purple-500',
    skills: ['PostgreSQL, MongoDB, Redis'],
  },
  {
    iconName: 'rocket',
    title: 'Performance & Tooling',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Profiling & optimization: Lighthouse, Chrome tracing, virtualized lists',
      'Skillful in Git workflows, cross-browser debugging, responsive design',
    ],
  },
] as const;

export const proficiencyLevels = [
  { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend', level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'AI/ML', level: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps', level: 80, color: 'from-orange-500 to-red-500' },
] as const;
