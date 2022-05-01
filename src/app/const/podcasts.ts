import { HorizontalComponentModel } from '../models/horizontal-component.model';

export const Podcasts: Array<HorizontalComponentModel> = [
    {
        organization: 'Adventure in Angular',
        subject: 'Reactive Forms in Angular',
        imageUrl: 'adventure-in-angular.webp',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias assumenda atque consequatur cum deserunt doloribus illum ipsum laborum maiores, modi mollitia nesciunt odio, perferendis quod ratione repellat sunt ut!',
        links: [
            { name: 'Spotify', imageUrl: 'spotify.png', link: 'test.com' },
            { name: 'Google Podcast', imageUrl: 'google-podcast.png', link: 'test.com' },
            { name: 'Apple Podcast', imageUrl: 'apple-podcast.png', link: 'test.com' },
        ],
    },
];
