import type { SocialIconName } from '@/types/social-icon-name';
import { socialImage } from '@/utils/assets';

const SOCIAL_ICON_FILES: Record<SocialIconName, string> = {
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
};

export function socialIconUrl(name: SocialIconName): string {
  return socialImage(SOCIAL_ICON_FILES[name]);
}
