import type {
  Certification,
  Education,
  ProfileInfo,
  SpokenLanguage,
  Volunteering,
} from '@/types/portfolio';

export const heroSummary =
  'I’m a Senior Software Engineer with 8+ years of experience building scalable web applications and product platforms. I care about clean architecture, performance, maintainability, and creating software that is useful for real users. I also enjoy mentoring engineers and helping teams move with more clarity and confidence.';

export const aboutSummary =
  'Senior Software Engineer with 8+ years of experience building scalable web applications. Strong background in Angular, VueJS, NuxtJS, Node.js/NestJS, .NET, TypeScript, JavaScript, architecture, design systems, performance optimization, and maintainable product platforms. Experienced in leading technical initiatives, mentoring engineers, owning features across the software development lifecycle, and collaborating with product, design, and backend teams. Author of 20+ technical articles with 4,000+ Stack Overflow reputation.';

export const aboutBio: string[] = [
  aboutSummary,
  'I care about clean architecture, thoughtful DX, and teams that communicate well. Whether migrating a monorepo, improving checkout security, or lifting conversion on a travel product, I focus on measurable outcomes and sustainable engineering practices.',
  'Outside of delivery work, I write, speak on podcasts, mentor through ADPList, and contribute to the community via Google Dev Library, Stack Overflow, and open source.',
];

export const profileInfo: ProfileInfo[] = [
  { subject: 'Title', answer: 'Senior Software Engineer' },
  { subject: 'Location', answer: 'The Netherlands' },
  { subject: 'Email', answer: 'dev.hosseinmousavi@gmail.com' },
  { subject: 'Phone', answer: '+31 6 24 63 30 02' },
  { subject: 'Website', answer: 'https://hossein.dev' },
];

export const spokenLanguages: SpokenLanguage[] = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Persian', proficiency: 'Native' },
  { name: 'Azeri', proficiency: 'Native' },
  { name: 'German', proficiency: 'Elementary proficiency' },
];

export const education: Education[] = [
  {
    degree: 'BSc in Astrophysics',
    institution: 'Kharazmi University',
    period: '2015 — 2019',
  },
];

export const certifications: Certification[] = [
  { name: 'Foundations of Project Management', issuer: 'Google' },
  { name: 'Cross-Platform Apps With Angular', issuer: 'Google' },
  { name: 'JavaScript Security Refreshers', issuer: 'Coursera' },
  { name: 'JavaScript: Under the Hood', issuer: 'LinkedIn' },
  { name: 'Docker Essentials', issuer: 'IBM' },
  { name: 'Prompt Engineering', issuer: 'LinkedIn' },
  { name: 'Cyber Security', issuer: 'Lufthansa' },
  { name: 'How To Give And Get Feedback', issuer: 'LinkedIn' },
];

export const volunteering: Volunteering[] = [
  {
    role: 'Google Developer Author',
    organization: 'Google Dev Library',
    url: 'https://devlibrary.withgoogle.com/authors/hossein13m',
  },
  {
    role: 'Angular Podcast Guest Of Honor',
    organization: 'Adventures in Angular (Spotify)',
    url: 'https://open.spotify.com/episode/5BoFoH3WNYU5khCOCqtogz',
  },
  {
    role: 'Top Software Engineering Career Growth Mentor',
    organization: 'ADPList',
    url: 'https://adplist.org/mentors/hossein-mousavi',
  },
  {
    role: 'JavaScript Contributor',
    organization: 'javascript.info',
    url: 'https://javascript.info/',
  },
  {
    role: 'Front End Academy Mentor',
    organization: 'Academy Post',
  },
];
