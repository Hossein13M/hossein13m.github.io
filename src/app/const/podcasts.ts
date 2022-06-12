import { HorizontalComponentModel } from '../models/horizontal-component.model';

export const Podcasts: Array<HorizontalComponentModel> = [
    {
        organization: 'Adventure in Angular',
        subject: 'Reactive Forms in Angular',
        imageUrl: 'adventure-in-angular.webp',
        generalLink: 'https://adventuresinangular.com/template-driven-approach-vs-reactive-form-approach-with-hossein-mousavi-aia-346',
        description:
            'Hossein Mousavi shares his methodology to angular form by presenting his template driven approach vs. reactive form approach. They also discuss the differences between form control, form group, and form array, and how you can build upon the elements within Angular through modular patterns and object-oriented project paradigms.',
        links: [
            { name: 'Spotify', imageUrl: 'spotify.png', link: 'https://open.spotify.com/episode/5BoFoH3WNYU5khCOCqtogz?si=QBVzySKXQkWZ_wbwP9ay8Q' },
            {
                name: 'Google Podcast',
                imageUrl: 'google-podcast.png',
                link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hZHZlbnR1cmVzaW5hbmd1bGFyLmNvbS9yc3M/episode/MGM3ZGNlOTktYWU0ZC00M2ZlLTg4YzAtYTE3NWQyZGU2ZmU5?sa=X&ved=0CAYQuIEEahcKEwjQ8oLS1c33AhUAAAAAHQAAAAAQAQ',
            },
            {
                name: 'Apple Podcast',
                imageUrl: 'apple-podcast.png',
                link: 'https://podcasts.apple.com/ph/podcast/template-driven-approach-vs-reactive-form-approach/id1238024888?i=1000559786754',
            },
            {
                name: 'Amazon Music',
                imageUrl: 'amazon-music.png',
                link: 'https://www.amazon.com/Adventures-in-Angular/dp/B08JJS6SNP',
            },
        ],
    },
];
