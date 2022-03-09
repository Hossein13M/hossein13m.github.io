export type ContactTypes = 'social' | 'openSource' | 'blogging';

export interface SocialMediaModel {
    name: string;
    url: string;
    imageLink: string;
    type: ContactTypes;
}
