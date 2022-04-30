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
