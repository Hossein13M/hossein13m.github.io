import { SocialMediaHeader, SocialMediaModel } from '../models/social-media.model';

export const SocialMedia: Array<SocialMediaModel> = [
    {
        name: 'GitHub',
        url: 'https://github.com/hossein13m',
        imageLink: 'assets/images/github.png',
        type: 'openSource',
    },
    {
        name: 'GitLab',
        url: 'https://gitlab.com/Hossein13M',
        imageLink: 'assets/images/gitlab.png',
        type: 'openSource',
    },
    {
        name: 'AskUbuntu',
        url: 'https://askubuntu.com/users/979144/hossein-mousavi?tab=profile',
        imageLink: 'assets/images/askUbuntu.png',
        type: 'openSource',
    },
    {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/10341207/hossein-mousavi',
        imageLink: 'assets/images/stackoverflow.png',
        type: 'openSource',
    },
    {
        name: 'NPM',
        url: 'https://www.npmjs.com/~hossein13m',
        imageLink: 'assets/images/npm.png',
        type: 'openSource',
    },
    {
        name: 'Google Dev',
        url: 'https://devlibrary.withgoogle.com/authors/hossein13m',
        imageLink: 'assets/images/google-dev.png',
        type: 'content',
    },
    {
        name: 'Medium',
        url: 'https://hossein13m.medium.com/',
        imageLink: 'assets/images/medium.png',
        type: 'content',
    },
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/episode/5BoFoH3WNYU5khCOCqtogz?si=3ff40026916b4322',
        imageLink: 'assets/images/spotify.png',
        type: 'content',
    },
    {
        name: 'Virgool',
        url: 'https://virgool.io/@Hossein13M',
        imageLink: 'assets/images/virgool.png',
        type: 'content',
    },
    {
        name: 'Gmail',
        url: 'mailto:dev.hosseinmousavi@gmail.com',
        imageLink: 'assets/images/gmail.png',
        type: 'social',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hossein13mousavi/',
        imageLink: 'assets/images/linkedin.png',
        type: 'social',
    },
    // {
    //     name: 'Telegram',
    //     url: 'https://t.me/m13hossein',
    //     imageLink: 'assets/images/telegram.png',
    //     type: 'social',
    // },
    {
        name: 'Skype',
        url: 'https://join.skype.com/invite/taEFdksb9mlM',
        imageLink: 'assets/images/skype.png',
        type: 'social',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/Hossein13M',
        imageLink: 'assets/images/twitter.png',
        type: 'social',
    },
    {
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=989396197609',
        imageLink: 'assets/images/whatsapp.png',
        type: 'social',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/hossein13.m',
        imageLink: 'assets/images/instagram.png',
        type: 'social',
    },
];

export const SocialMediaHeaders: Array<SocialMediaHeader> = [
    { type: 'openSource', title: 'Check My Open Source Contributions', icon: 'code' },
    { type: 'social', title: 'Reach Out To Me On Social Medias', icon: 'groups' },
    { type: 'content', title: 'Find Out My Contents', icon: 'article' },
];
