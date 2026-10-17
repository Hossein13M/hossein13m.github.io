export type NavItem = {
  title: string;
  path: string;
};

export type Company = {
  companyId: number;
  logo: string;
  name: string;
  alias?: string;
  industry: string;
  website: string;
  location: string;
  description: string;
};

export type JobExperience = {
  companyId: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobSummary: string;
  jobRequiredSkills: string[];
};

export type Article = {
  title: string;
  url: string;
  image: string;
  summary: string;
};

type PodcastLink = {
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
