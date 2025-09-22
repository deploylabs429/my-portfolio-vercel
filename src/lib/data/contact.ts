export const contactMethods = [
  {
    iconName: 'email',
    title: 'Email',
    value: 'christophertanaka42@gmail.com',
    action: 'mailto:christophertanaka42@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Perfect for detailed discussions',
  },
  {
    iconName: 'phone',
    title: 'Phone',
    value: '+1 (425) 565-3249',
    action: 'tel:+14255653249',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Great for quick conversations',
  },
  {
    iconName: 'location',
    title: 'Location',
    value: 'Miami, FL',
    action: '#',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Based in Miami; open to remote work',
  },
  {
    iconName: 'website',
    title: 'Website',
    value: 'christtanaka.life',
    action: 'https://www.christtanaka.life/',
    gradient: 'from-orange-500 to-red-500',
    description: 'More about my work',
  },
] as const;
