import type { SocialHeader, SocialLink } from '@/types/portfolio';

const socialIcon = (name: string) => `/images/social/${name}.png`;

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/hossein13m',
    icon: socialIcon('github'),
    type: 'openSource',
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/Hossein13M',
    icon: socialIcon('gitlab'),
    type: 'openSource',
  },
  {
    name: 'Ask Ubuntu',
    url: 'https://askubuntu.com/users/979144/hossein-mousavi?tab=profile',
    icon: socialIcon('askUbuntu'),
    type: 'openSource',
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/10341207/hossein-mousavi',
    icon: socialIcon('stackoverflow'),
    type: 'openSource',
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/~hossein13m',
    icon: socialIcon('npm'),
    type: 'openSource',
  },
  {
    name: 'Google Dev',
    url: 'https://devlibrary.withgoogle.com/authors/hossein13m',
    icon: socialIcon('google-dev'),
    type: 'content',
  },
  {
    name: 'Medium',
    url: 'https://hossein13m.medium.com/',
    icon: socialIcon('medium'),
    type: 'content',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/episode/5BoFoH3WNYU5khCOCqtogz?si=3ff40026916b4322',
    icon: socialIcon('spotify'),
    type: 'content',
  },
  {
    name: 'Google Podcast',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hZHZlbnR1cmVzaW5hbmd1bGFyLmNvbS9yc3M/episode/MGM3ZGNlOTktYWU0ZC00M2ZlLTg4YzAtYTE3NWQyZGU2ZmU5',
    icon: socialIcon('google-podcast'),
    type: 'content',
  },
  {
    name: 'Apple Podcast',
    url: 'https://podcasts.apple.com/ph/podcast/template-driven-approach-vs-reactive-form-approach/id1238024888?i=1000559786754',
    icon: socialIcon('apple-podcast'),
    type: 'content',
  },
  {
    name: 'Amazon Music',
    url: 'https://www.amazon.com/Adventures-in-Angular/dp/B08JJS6SNP',
    icon: socialIcon('amazon-music'),
    type: 'content',
  },
  {
    name: 'Virgool',
    url: 'https://virgool.io/@Hossein13M',
    icon: socialIcon('virgool'),
    type: 'content',
  },
  {
    name: 'Gmail',
    url: 'mailto:dev.hosseinmousavi@gmail.com',
    icon: socialIcon('gmail'),
    type: 'social',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hossein13m',
    icon: socialIcon('linkedin'),
    type: 'social',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/DevDastan',
    icon: socialIcon('telegram'),
    type: 'social',
  },
  {
    name: 'Skype',
    url: 'https://join.skype.com/invite/taEFdksb9mlM',
    icon: socialIcon('skype'),
    type: 'social',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Hossein13M',
    icon: socialIcon('twitter'),
    type: 'social',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hossein13.m',
    icon: socialIcon('instagram'),
    type: 'social',
  },
];

export const socialHeaders: SocialHeader[] = [
  { type: 'openSource', title: 'Open Source' },
  { type: 'social', title: 'Social' },
  { type: 'content', title: 'Blog' },
];

export function getSocialByType(type: SocialLink['type']) {
  return socialLinks.filter((s) => s.type === type);
}
