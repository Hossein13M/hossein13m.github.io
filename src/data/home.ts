import type { HomeStat } from '@/types/portfolio';
import { site } from './site';

export const homeStats: HomeStat[] = [
  { title: '8+ Years', subtitle: 'Software Engineering Experience' },
  { title: '20+', subtitle: 'Technical Articles' },
  { title: '4,000+', subtitle: 'Stack Overflow Reputation' },
  { title: '200+', subtitle: 'Code Reviews' },
];

export type SkillChipItem = {
  name: string;
  href?: string;
  iconUrl?: string;
};

export type SkillRow = {
  label: string;
  items: SkillChipItem[];
};

export const skillRows: SkillRow[] = [
  {
    label: 'Working at',
    items: [
      {
        name: 'AIHR',
        href: 'https://www.aihr.com',
        iconUrl: '/images/companies/aihr.png',
      },
    ],
  },
  {
    label: 'Worked with',
    items: [
      { name: 'Angular' },
      { name: 'VueJS' },
      { name: 'NuxtJS' },
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C#' },
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'ExpressJS' },
      { name: 'dotnet' },
      { name: 'SQL' },
      { name: 'MongoDB' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'CI/CD' },
      { name: 'Nx' },
      { name: 'Vite' },
      { name: 'Git' },
      { name: 'Cypress' },
      { name: 'Agile' },
      { name: 'Bash Script' },
    ],
  },
];

const socialIcon = (name: string) => `/images/social/${name}.png`;

export type FindMeLink = {
  label: string;
  url: string;
  icon: string;
};

export const findMeOnLinks: FindMeLink[] = [
  { label: 'GitHub', url: site.github, icon: socialIcon('github') },
  { label: 'LinkedIn', url: site.linkedin, icon: socialIcon('linkedin') },
  { label: 'Medium', url: site.medium, icon: socialIcon('medium') },
  {
    label: 'Stack Overflow',
    url: site.stackoverflow,
    icon: socialIcon('stackoverflow'),
  },
  { label: 'Telegram', url: site.telegram, icon: socialIcon('telegram') },
];
