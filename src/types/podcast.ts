export interface PodcastPlatform {
  name: string;
  icon: string;
  url: string;
}

export interface Podcast {
  organization: string;
  title: string;
  image: string;
  url: string;
  description: string;
  links: PodcastPlatform[];
}
