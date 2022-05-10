export type ContactTypes = 'social' | 'openSource' | 'content';

export interface SocialMediaModel {
    name: string;
    url: string;
    imageLink: string;
    type: ContactTypes;
}

export interface SocialMediaHeader {
    type: ContactTypes;
    title: string;
    icon: string;
}
