import type { SocialLink } from '@/types/social-link';
import { companyLogoUrl } from '@/utils/companyLogo';
import { socialIconUrl } from '@/utils/socialIcon';
import { getCurrentCompany } from './experience';
import { site } from './site';

type SkillChip = {
  name: string;
  href?: string;
  iconUrl?: string;
};

type SkillGroup = {
  label: string;
  items: SkillChip[];
};

const currentCompany = getCurrentCompany();

const currentWorkplaceChips: SkillChip[] = currentCompany
  ? [
      {
        name: currentCompany.alias || currentCompany.name,
        href: currentCompany.website || undefined,
        iconUrl: companyLogoUrl(currentCompany.logo),
      },
    ]
  : [];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Currently working at',
    items: currentWorkplaceChips,
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

export const introduction =
  'I’m a Senior DevOps Engineer based in the Netherlands, with 10+ years of experience in tech, having grown through roles in infrastructure, software engineering, and platform delivery. I care about reliable systems, clean automation, security, and cloud infrastructure teams can depend on. I enjoy mentoring engineers and helping teams move with more clarity and confidence.';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: site.github, icon: socialIconUrl('GitHub') },
  { label: 'LinkedIn', href: site.linkedin, icon: socialIconUrl('LinkedIn') },
  { label: 'Medium', href: site.medium, icon: socialIconUrl('Medium') },
  {
    label: 'Stack Overflow',
    href: site.stackoverflow,
    icon: socialIconUrl('Stack Overflow'),
  },
  { label: 'Telegram', href: site.telegram, icon: socialIconUrl('Telegram') },
];

export const mentoringLinks: SocialLink[] = [
  {
    label: 'MentorCruise',
    href: site.mentorcruise,
    icon: socialIconUrl('MentorCruise'),
  },
];
