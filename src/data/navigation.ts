import type { NavItem } from '@/types/portfolio';
import { site } from './site';

export const navigation: NavItem[] = [
  { title: 'Experiences', path: '/experiences' },
  { title: 'Blog', path: '/blog' },
];

export const externalNav = [
  { title: 'GitHub', url: site.github, icon: 'github' },
  { title: 'LinkedIn', url: site.linkedin, icon: 'linkedin' },
];
