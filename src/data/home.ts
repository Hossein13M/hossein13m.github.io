import type { HomeStat } from '@/types/portfolio';
import { socialImage } from '@/utils/assets';
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
    label: 'Currently working at',
    items: currentWorkplaceItems,
  },
  {
    label: 'Experienced in',
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
      { name: '.NET' },
      { name: 'TCP/IP' },
      { name: 'Routing' },
      { name: 'VLAN' },
      { name: 'OSPF' },
      { name: 'Agile' },
    ],
  },
];

export type FindMeLink = {
  label: string;
  url: string;
  icon: string;
};

export const findMeOnLinks: FindMeLink[] = [
  { label: 'GitHub', url: site.github, icon: socialImage('github.png') },
  { label: 'LinkedIn', url: site.linkedin, icon: socialImage('linkedin.png') },
  { label: 'Medium', url: site.medium, icon: socialImage('medium.png') },
  {
    label: 'Stack Overflow',
    url: site.stackoverflow,
    icon: socialImage('stackoverflow.png'),
  },
  { label: 'Telegram', url: site.telegram, icon: socialImage('telegram.png') },
];
