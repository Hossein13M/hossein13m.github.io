import type { Company, JobExperience } from '@/types/portfolio';

export const companies: Company[] = [
  {
    companyId: 0,
    logo: 'aihr',
    name: 'AIHR',
    industry: 'HR Technology',
    website: 'https://www.aihr.com',
    location: 'The Netherlands',
    description:
      'Global leader in HR training and resources, building digital products for HR professionals worldwide.',
  },
  {
    companyId: 1,
    logo: 'eurowings',
    name: 'Eurowings',
    industry: 'Aviation / Travel',
    website: 'https://www.eurowings.com',
    location: 'Germany',
    description:
      'Low-cost airline subsidiary of the Lufthansa Group, operating flights across Europe.',
  },
  {
    companyId: 2,
    logo: 'alibaba',
    name: 'Alibaba Travels.Co',
    industry: 'Travel Arrangements',
    website: 'https://www.alibaba.ir',
    location: 'Iran',
    description:
      'Pioneer of online travel services in Iran, providing innovative services for domestic and international travelers.',
  },
  {
    companyId: 3,
    logo: 'tapsell',
    name: 'Tapsell',
    industry: 'Advertising Services',
    website: 'https://tapsell.ir/en',
    location: 'Iran',
    description:
      'Leading advertising network connecting advertisers and publishers with high-grade traffic and monetization tools.',
  },
  {
    companyId: 4,
    logo: 'xepos',
    name: 'XEPOS LTD',
    industry: 'IT Services',
    website: 'https://xepos.co.uk',
    location: 'United Kingdom',
    description:
      'EPOS and retail technology solutions for restaurants and retailers across the UK.',
  },
  {
    companyId: 5,
    logo: 'mft',
    name: 'MFT',
    industry: 'Network Infrastructure',
    website: '',
    location: 'Iran',
    description:
      'IT and network infrastructure services for business environments.',
  },
];

export const experiences: JobExperience[] = [
  {
    companyId: 0,
    employmentType: 'Full-Time',
    startDate: 'February 2025',
    endDate: 'Present',
    jobTitle: 'Senior Software Engineer',
    jobSummary:
      'I brought several Angular codebases together into one Nx monorepo and introduced a shared design system and component library. I helped move the team from Bitbucket to GitHub, set up delivery with GitHub Actions and AWS, and shaped frontend architecture practices across projects. I used AI-assisted tools for exploration and refactoring and shipped a new reporting experience for the product.',
    jobRequiredSkills: [
      'JavaScript',
      'TypeScript',
      'C#',
      'Angular',
      'Nx',
      'Node.js',
      'dotnet',
      'CI/CD',
      'AWS',
      'Docker',
      'AI',
    ],
  },
  {
    companyId: 1,
    employmentType: 'Full-Time',
    startDate: 'August 2024',
    endDate: 'January 2025',
    jobTitle: 'Senior Software Engineer',
    jobSummary:
      'I worked on strengthening checkout and payment flows with PCI tokenization and spent time raising code quality through reviews and frontend best-practice sessions. I documented infrastructure and architecture so new engineers could onboard more easily, and wrote about observability in production systems.',
    jobRequiredSkills: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'Node.js',
      'NestJS',
      'Git',
      'CI/CD',
      'Azure',
    ],
  },
  {
    companyId: 2,
    employmentType: 'Full-Time',
    startDate: 'December 2020',
    endDate: 'July 2024',
    jobTitle: 'Senior Front End Engineer',
    jobSummary:
      'I focused on the tour product and conversion through experimentation and A/B testing. I led the migration from Vue 2 to Vue 3, improved day-to-day developer experience with auto-imports and a pnpm-based monorepo, and built the rate-and-review module. I worked closely with product and backend in an agile squad on features that supported steady growth in sales.',
    jobRequiredSkills: [
      'JavaScript',
      'TypeScript',
      'VueJS',
      'NuxtJS',
      'Node.js',
      'NestJS',
      'CI/CD',
      'Agile',
    ],
  },
  {
    companyId: 3,
    employmentType: 'Full-Time',
    startDate: 'December 2019',
    endDate: 'December 2020',
    jobTitle: 'Front End Team Lead',
    jobSummary:
      'I led a small frontend team through a full website rewrite and the rollout of a design system that made new features easier and faster to build. I stayed hands-on in the codebase with regular code reviews and helped the team keep a consistent, high standard of quality.',
    jobRequiredSkills: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'Node.js',
      'Express',
      'CI/CD',
      'Agile',
    ],
  },
  {
    companyId: 3,
    employmentType: 'Full-Time',
    startDate: 'September 2019',
    endDate: 'December 2019',
    jobTitle: 'Front End Developer',
    jobSummary:
      'I rebuilt the landing experience from WordPress to Angular and put more emphasis on testing and TypeScript across the frontend. I tuned performance and Core Web Vitals so the page felt faster and more stable for users.',
    jobRequiredSkills: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'React',
      'NextJS',
      'Node.js',
      'Express',
      'CI/CD',
      'Agile',
    ],
  },
  {
    companyId: 4,
    employmentType: 'Full-Time',
    startDate: 'July 2018',
    endDate: 'August 2019',
    jobTitle: 'Front End Developer',
    jobSummary:
      'I built a BPMN-based web application that replaced a lot of manual, paper-heavy workflows. I contributed to a widely used product for restaurants and retailers across the UK and chipped away at technical debt by tightening component boundaries and structure.',
    jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'Agile'],
  },
  {
    companyId: 5,
    employmentType: 'Full-Time',
    startDate: 'January 2016',
    endDate: 'July 2018',
    jobTitle: 'Network Infrastructure Engineer',
    jobSummary:
      'I kept network and core IT services running, administered Windows and Linux environments, and configured MikroTik routers with DHCP, DNS, and subnetting. I troubleshot LAN and WAN issues and worked to keep services reliable for the business.',
    jobRequiredSkills: [
      'Linux',
      'MikroTik',
      'DHCP',
      'DNS',
      'Active Directory',
      'TCP/IP',
      'Routing',
      'Switching',
      'Subnetting',
    ],
  },
];

export function getCompanyById(id: number) {
  return companies.find((c) => c.companyId === id);
}

export function getExperiencesForCompany(companyId: number) {
  return experiences.filter((e) => e.companyId === companyId);
}
