import type { NavItem } from '@/types/portfolio';
import type { SocialIconName } from '@/utils/socialIcon';
import { site } from './site';

export const navigation: NavItem[] = [
  { title: 'Experiences', path: '/experiences' },
  { title: 'Blog', path: '/blog' },
];

export const externalNav: Array<{
  title: string;
  url: string;
  icon: SocialIconName;
}> = [
  { title: 'GitHub', url: site.github, icon: 'GitHub' },
  { title: 'LinkedIn', url: site.linkedin, icon: 'LinkedIn' },
];
