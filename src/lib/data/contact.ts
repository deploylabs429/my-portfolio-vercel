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
    value: '425-565-3249',
    action: 'tel:425-565-3249',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Great for quick conversations',
  },
  {
    iconName: 'location',
    title: 'Remote',
    value: 'Open to remote work',
    action: '#',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Available across US-friendly time zones',
  },
  {
    iconName: 'website',
    title: 'Website',
    value: 'himalayas.app/@christophertanaka',
    action: 'https://himalayas.app/@christophertanaka',
    gradient: 'from-orange-500 to-red-500',
    description: 'More about my work',
  },
] as const;
