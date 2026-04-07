export const profileAvatar = {
  src: '/photo2.png',
  alt: 'Revy Tugab',
} as const;

/** Hero title + blurb under the avatar (edit here). */
export const homeHeroCopy = {
  headline: 'Building reliable products for fintech, payroll and SaaS',
  summaryBefore: 'Senior Software Engineer with ',
  summaryHighlight: '8+ years',
  summaryAfter:
    'building full-stack products with strong experience in distributed systems, cloud infrastructure, and event-driven architecture.',
} as const;

/** Home page `metadata.description` (search / social previews). Keep in sync with the hero. */
export const homePageDescription =
  'Senior Software Engineer building low-latency, AI-powered products. Explore highlights, experience, and core skills.';

export const homeHighlightsSection = {
  title: 'Core expertise',
  subtitle: 'A few areas where I tend to spend most of my time shipping production systems.',
} as const;

export const homeHighlights = [
  {
    iconName: 'code',
    title: 'Backend Architecture',
    description:
      'Designing and improving reliable services that handle complex workflows, high transaction volumes, and production-critical operations.',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    iconName: 'flash',
    title: 'AI/LLM Integration',
    description:
      'RAG, multimodal image+text search, and inference pipelines from prototype to production.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    iconName: 'rocket',
    title: 'Real-Time at Scale',
    description: 'LiveGraph-style subscriptions, low-latency updates, and shard-aware backends.',
    gradient: 'from-blue-500 to-cyan-600',
  },
] as const;

export const homeStats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '3', label: 'Major Companies' },
  { value: '100%', label: 'Client Satisfaction' },
] as const;
