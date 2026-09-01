export type NavItem = {
  title: string;
  path: string;
  icon?: string;
};

export type HomeStat = {
  title: string;
  subtitle: string;
};

export type ProfileInfo = {
  subject: string;
  answer: string;
};

export type SpokenLanguage = {
  name: string;
  proficiency: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Volunteering = {
  role: string;
  organization: string;
  url?: string;
};

export type Company = {
  companyId: number;
  logo: string;
  name: string;
  industry: string;
  website: string;
  location: string;
  description: string;
};

export type JobExperience = {
  companyId: number;
  employmentType: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobSummary: string;
  jobRequiredSkills: string[];
};

export type SocialType = 'openSource' | 'social' | 'content';

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
  type: SocialType;
};

export type SocialHeader = {
  type: SocialType;
  title: string;
};

export type Article = {
  title: string;
  url: string;
  image: string;
  summary: string;
  publisher: string;
  publicationUrl: string;
  language: string;
  category: string[];
  featured?: boolean;
};

export type PodcastLink = {
  name: string;
  icon: string;
  link: string;
};

export type Podcast = {
  organization: string;
  subject: string;
  image: string;
  generalLink: string;
  description: string;
  links: PodcastLink[];
};
