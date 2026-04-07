/** Book-a-call link (navbar, About hero, home/skills/contact CTAs). */
export const schedulingUrl = 'https://calendly.com/revytugab6/30min' as const;

/** JSON-LD `sameAs` — add LinkedIn, GitHub, etc. */
export const sameAsProfiles = [
  'https://Revy-Tugab-Tech.vercel.app/',
  //'https://himalayas.app/@christophertanaka',
  // 'https://www.linkedin.com/in/USERNAME',
  // 'https://github.com/USERNAME',
] as const;

export const contactMethods = [
  {
    iconName: 'email',
    title: 'Email',
    value: 'revytugab6@gmail.com',
    action: 'mailto:revytugab6@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Perfect for detailed discussions',
  },
  {
    iconName: 'phone',
    title: 'Phone',
    value: '+63 (930) 545-2811',
    action: 'tel:+639305452811',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Great for quick conversations',
  },
  {
    iconName: 'location',
    title: 'Location',
    value: 'Angeles City, Pampanga',
    action: '#',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Based in Angeles; open to remote work',
  },
  {
    iconName: 'website',
    title: 'Website',
    value: 'My Portfolio',
    action: 'https://revy-tugab-tech.vercel.app/',
    gradient: 'from-orange-500 to-red-500',
    description: 'More about my work',
  },
] as const;
