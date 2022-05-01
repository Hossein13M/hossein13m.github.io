export type HorizontalCardComponentType = 'Podcast' | 'Project';
export type HorizontalCardComponentIcon = 'podcasts' | 'developer_mode';

export interface HorizontalCardComponent {
    type: HorizontalCardComponentType;
    icon: HorizontalCardComponentIcon;
}

export interface PodcastLink {
    name: string;
    imageUrl: string;
    link: string;
}

export interface PodcastModel {
    organization: string;
    subject: string;
    imageUrl: string;
    description: string;
    links: Array<PodcastLink>;
}
