export type HorizontalCardComponentName = 'Podcast' | 'Project';
export type HorizontalCardComponentIcon = 'podcasts' | 'developer_mode';

export interface HorizontalCardComponentType {
    type: HorizontalCardComponentName;
    icon: HorizontalCardComponentIcon;
}

export interface PodcastLink {
    name: string;
    imageUrl: string;
    link: string;
}

export interface HorizontalComponentModel {
    organization: string;
    subject: string;
    imageUrl: string;
    description: string;
    links: Array<PodcastLink>;
}
