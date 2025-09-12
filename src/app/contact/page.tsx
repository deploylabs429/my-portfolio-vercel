import type { Metadata } from 'next';

import JsonLd from '@/components/common/JsonLd';
import PageWrapper from '@/components/common/PageWrapper';
import CoffeeCTA from '@/components/features/Contact/CoffeeCTA';
import ContactForm from '@/components/features/Contact/ContactForm';
import ContactHero from '@/components/features/Contact/ContactHero';
import MethodGrid from '@/components/features/Contact/MethodGrid';
import { contactMethods as contactMethodsData } from '@/lib/data/contact';
import { renderIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Contact | Christopher Tanaka',
  description:
    'Get in touch with Christopher Tanaka for projects, opportunities, or a quick coffee chat. Email, phone, and more.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: '/contact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const revalidate = 86400;

const Contact = () => {
  const contactMethods = contactMethodsData.map((m) => ({
    ...m,
    icon: renderIcon(m.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const email = contactMethodsData.find((m) => m.title === 'Email')?.value;
  const phone = contactMethodsData.find((m) => m.title === 'Phone')?.value;

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Tanaka',
          url: `${baseUrl}/contact`,
          contactPoint: [
            ...(email
              ? [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: `mailto:${email}`,
                    availableLanguage: ['English'],
                  },
                ]
              : []),
            ...(phone
              ? [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    telephone: phone,
                    availableLanguage: ['English'],
                  },
                ]
              : []),
          ],
        }}
      />
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Methods Grid */}
      <MethodGrid methods={contactMethods} />

      {/* Contact Form */}
      <ContactForm />

      {/* Quick Response Section */}
      <CoffeeCTA />
    </PageWrapper>
  );
};

export default Contact;
