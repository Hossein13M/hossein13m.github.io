import { socialImage } from '@/utils/assets';

export type SocialIconName = keyof typeof SOCIAL_ICONS;

const SOCIAL_ICONS = {
  'Amazon Music': 'amazon-music.svg',
  'Apple Podcast': 'apple-podcast.svg',
  GitHub: 'github.svg',
  Gmail: 'gmail.svg',
  'Google Podcast': 'google-podcast.svg',
  LinkedIn: 'linkedin.svg',
  Medium: 'medium.svg',
  MentorCruise: 'mentorcruise.svg',
  Spotify: 'spotify.svg',
  'Stack Overflow': 'stackoverflow.svg',
  Telegram: 'telegram.svg',
} as const;

export function socialIconPath(name: SocialIconName): string {
  return socialImage(SOCIAL_ICONS[name]);
}
