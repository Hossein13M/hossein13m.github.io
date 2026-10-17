import { companyLogoSrc } from '@/utils/companyLogo';
import { socialIconPath } from '@/utils/socialIcon';
import { getCurrentCompany } from './experience';
import { site } from './site';

type SkillChipItem = {
  name: string;
  href?: string;
  iconUrl?: string;
};

type SkillRow = {
  label: string;
  items: SkillChipItem[];
};

type FindMeLink = {
  label: string;
  url: string;
  icon: string;
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
      { name: 'Helm' },
      { name: 'Terraform' },
      { name: 'Kafka' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'Splunk' },
      { name: 'Git' },
      { name: 'Bash' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C#' },
      { name: 'Python' },
      { name: 'Node.js' },
      { name: 'SQL' },
      { name: 'MongoDB' },
      { name: 'Angular' },
      { name: 'Vue' },
      { name: 'React' },
      { name: 'Express' },
      { name: '.NET' },
      { name: 'TCP/IP' },
      { name: 'AI' },
      { name: 'Agile' },
    ],
  },
];

export const homeIntroduction =
  'I’m a Senior DevOps Engineer with 10+ years of experience in tech, having grown through roles in infrastructure, software engineering, and platform delivery. I care about reliable systems, clean automation, and infrastructure teams can depend on. I enjoy mentoring engineers and helping teams move with more clarity and confidence.';

export const findMeOnLinks: FindMeLink[] = [
  { label: 'GitHub', url: site.github, icon: socialIconPath('GitHub') },
  { label: 'LinkedIn', url: site.linkedin, icon: socialIconPath('LinkedIn') },
  { label: 'Medium', url: site.medium, icon: socialIconPath('Medium') },
  {
    label: 'Stack Overflow',
    url: site.stackoverflow,
    icon: socialIconPath('Stack Overflow'),
  },
  { label: 'Telegram', url: site.telegram, icon: socialIconPath('Telegram') },
];
