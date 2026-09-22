import type { HomeStat } from '@/types/portfolio';
import { companyLogoSrc } from '@/utils/companyLogo';
import { getCurrentCompany } from './experience';
import { site } from './site';

export const homeStats: HomeStat[] = [
  { title: '10+ Years', subtitle: 'Experience in Tech' },
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

const currentCompany = getCurrentCompany();

const currentWorkplaceItems: SkillChipItem[] = currentCompany
  ? [
      {
        name: currentCompany.alias || currentCompany.name,
        href: currentCompany.website || undefined,
        iconUrl: companyLogoSrc(currentCompany.logo),
      },
    ]
  : [];

export const skillRows: SkillRow[] = [
  {
    label: 'Working at',
    items: currentWorkplaceItems,
  },
  {
    label: 'Worked with',
    items: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'System Design' },
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'Linux' },
      { name: 'CI/CD' },
      { name: 'Argo CD' },
      { name: 'Helm' },
      { name: 'Terraform' },
      { name: 'Kafka' },
      { name: 'Elasticsearch' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'Splunk' },
      { name: 'OpenTelemetry' },
      { name: 'Git' },
      { name: 'Bash Script' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C#' },
      { name: 'Python' },
      { name: 'Node.js' },
      { name: 'SQL' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Angular' },
      { name: 'VueJS' },
      { name: 'React' },
      { name: 'ExpressJS' },
      { name: 'NestJS' },
      { name: 'dotnet' },
      { name: 'Agile' },
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
