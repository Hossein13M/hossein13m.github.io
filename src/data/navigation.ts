import type { NavLink } from '@/types/nav-link';
import type { SocialNavLink } from '@/types/social-nav-link';
import { site } from './site';

export const mainNav: NavLink[] = [
  { title: 'Experiences', path: '/experiences' },
  { title: 'Blog', path: '/blog' },
];

export const socialNav: SocialNavLink[] = [
  { title: 'GitHub', url: site.github, icon: 'GitHub' },
  { title: 'LinkedIn', url: site.linkedin, icon: 'LinkedIn' },
];
