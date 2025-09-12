import type { ReactNode } from 'react';

import {
  MdBook,
  MdCloud,
  MdCode,
  MdEmail,
  MdFlashOn,
  MdLanguage,
  MdLocationOn,
  MdPhone,
  MdPsychology,
  MdRocketLaunch,
  MdSchool,
  MdSecurity,
  MdStar,
  MdStorage,
  MdWork,
} from 'react-icons/md';
import { SiFigma, SiGoogle } from 'react-icons/si';

export type IconName =
  | 'code'
  | 'flash'
  | 'rocket'
  | 'work'
  | 'star'
  | 'school'
  | 'book'
  | 'storage'
  | 'psychology'
  | 'cloud'
  | 'security'
  | 'email'
  | 'phone'
  | 'location'
  | 'website';

export const renderIcon = (name: IconName, className = 'w-8 h-8'): ReactNode => {
  const map: Record<IconName, ReactNode> = {
    code: <MdCode className={className} />,
    flash: <MdFlashOn className={className} />,
    rocket: <MdRocketLaunch className={className} />,
    work: <MdWork className={className} />,
    star: <MdStar className={className} />,
    school: <MdSchool className={className} />,
    book: <MdBook className={className} />,
    storage: <MdStorage className={className} />,
    psychology: <MdPsychology className={className} />,
    cloud: <MdCloud className={className} />,
    security: <MdSecurity className={className} />,
    email: <MdEmail className={className} />,
    phone: <MdPhone className={className} />,
    location: <MdLocationOn className={className} />,
    website: <MdLanguage className={className} />,
  };
  return map[name];
};

export type BrandName = 'google' | 'figma' | 'electrifai' | 'foxyai' | 'university-of-tokyo';

export const renderBrandIcon = (brand: BrandName, className = 'w-8 h-8'): ReactNode => {
  switch (brand) {
    case 'google':
      return <SiGoogle className={className} />;
    case 'figma':
      return <SiFigma className={className} />;
    // For brands without a Simple Icons entry or without local assets, fall back
    // to a sensible default: work icon for companies, school for universities.
    case 'electrifai':
    case 'foxyai':
      return <MdWork className={className} />;
    case 'university-of-tokyo':
      return <MdSchool className={className} />;
    default:
      return <MdWork className={className} />;
  }
};
