import type { Article, Podcast } from '@/types/portfolio';
import { publicationImage, socialImage } from '@/utils/assets';
import { socialIconPath } from '@/utils/socialIcon';

const img = (file: string) => publicationImage(file);

export const articles: Article[] = [
  {
    title: 'What Is Observability In Software Engineering?',
    url: 'https://medium.com/eurowingsdigital/what-is-observability-in-software-engineering-45397cb9b3c8',
    image: img('observability.webp'),
    summary:
      'A simple guide to understanding logs, metrics, and traces, and how Eurowings Digital implements observability.',
  },
  {
    title: 'Vue Reactivity In-Depth',
    url: 'https://medium.com/itnext/vue-reactivity-in-depth-720b466a36a',
    image: img('vue-reactivity.webp'),
    summary:
      'How Vue handles reactivity, from ref and reactive to proxies, computed properties, and watchers behind the scenes.',
  },
  {
    title: 'The Ultimate Design Principles Guide For Developers',
    url: 'https://hossein13m.medium.com/the-ultimate-design-principles-guide-for-developers-d4aa58937283',
    image: img('design.webp'),
    summary:
      'Bridging the gap between designers and developers, covering visual design basics and the fundamentals developers need to learn.',
  },
  {
    title: 'Cracking The Code Smells',
    url: 'https://hossein13m.medium.com/cracking-the-code-smells-a1260093e9e7',
    image: img('codeSmells.webp'),
    summary:
      'Learn about code smells like long methods and spaghetti code, with real examples and ways to refactor toward cleaner code.',
  },
  {
    title: 'Understanding the Importance of Coupling in Software Development',
    url: 'https://hossein13m.medium.com/understanding-the-importance-of-coupling-in-software-development-dfe7f9aab04',
    image: img('coupling.webp'),
    summary:
      'Building flexible and maintainable systems for long term success by understanding coupling between software modules.',
  },
  {
    title: 'JavaScript’s Garbage Collector',
    url: 'https://hossein13m.medium.com/javascripts-garbage-collector-8f0807ef438c',
    image: img('garbage-collector.webp'),
    summary:
      'Efficient memory management for enhancing performance, including how JavaScript garbage collection and the mark and sweep algorithm work.',
  },
  {
    title: 'How JavaScript Proxy Works Under The Hood?',
    url: 'https://hossein13m.medium.com/how-javascript-proxy-works-under-the-hood-e707f8c14aad',
    image: img('proxy.webp'),
    summary:
      'Uncover the power of JavaScript Proxy to customize object operations, enhance control, and add validation and security.',
  },
  {
    title: 'Software Development Is Not All About Coding!',
    url: 'https://hossein13m.medium.com/software-development-is-not-all-about-coding-b720cd680e98',
    image: img('not-coding.webp'),
    summary:
      'A guide to delivering working software effectively with more agility, beyond writing code, through estimation, teamwork, and simplicity.',
  },
  {
    title: 'Refactor Your Vue Application By Using Setup Scripts',
    url: 'https://hossein13m.medium.com/refactor-your-vue-application-by-using-setup-scripts-f4d68853d75e',
    image: img('vue-setup.webp'),
    summary:
      'A guide to enhance your Vue 3 application using script setup, refactoring from Options API to Composition API and then to script setup.',
  },
  {
    title: 'Linux Touchpad Gestures',
    url: 'https://hossein13m.medium.com/linux-touchpad-gestures-2f0179d6e5b0',
    image: img('linux-touchpad-gesture.webp'),
    summary:
      'Implement touchpad gestures for Linux by using the libinput gesture tool. Install and configure it for proper touchpad gestures.',
  },
  {
    title: 'A Complete Guide To Angular Multilingual Application (i18n)',
    url: 'https://medium.com/angular-in-depth/a-complete-guide-to-angular-multilingual-application-91f431f0f12c',
    image: img('angular-multi-lingual.webp'),
    summary:
      'Initialize and implement an Angular i18n application with Transloco, including lazy loaded translations in templates and TypeScript.',
  },
  {
    title: 'The Freedom They Stole From Us',
    url: 'https://hossein13m.medium.com/the-freedom-they-stole-from-us-55d4614f7af4',
    image: img('freedom.webp'),
    summary:
      'Throughout history, ideologies have been used by governments and organizations to rule over people. Some are against freedom.',
  },
  {
    title: 'How to Enlighten Yourself As A Developer Throughout Your Career',
    url: 'https://itnext.io/how-to-enlighten-yourself-as-a-developer-throughout-your-career-c49d829b88ef',
    image: img('enlightenment.webp'),
    summary:
      'Making progress toward your career and avoiding burning down is vital in any software developer career. We will discuss this in this Medium story.',
  },
  {
    title: 'What does it mean to truly be a responsible person?',
    url: 'https://medium.com/life-tips/what-does-it-mean-to-truly-be-a-responsible-person-aea7c476d361',
    image: img('responsibility.webp'),
    summary:
      'What it means to truly be a responsible person, built on knowledge and will, and how to accept the results of your choices.',
  },
  {
    title: 'API-First Approach Complete Guide',
    url: 'https://itnext.io/a-complete-guide-to-the-api-first-approach-ecd796dd0f10',
    image: img('api-first.webp'),
    summary:
      'A complete look at the API first approach: design APIs as first class citizens so the product matches stakeholder needs before code takes over.',
  },
  {
    title: 'How to Implement Dark/Light Themes in a Next.js App',
    url: 'https://javascript.plainenglish.io/how-to-implement-dark-light-themes-in-a-next-js-app-using-context-hook-tailwindcss-336558dd4579',
    image: img('nextjs-tailwind.webp'),
    summary:
      'Initialize a Next.js application and then implement a dark and light theme toggle using the context hook and TailwindCSS.',
  },
  {
    title: 'Multiple Interceptors in Angular',
    url: 'https://medium.com/codex/multiple-interceptors-in-angular-e0880b2f7d91',
    image: img('medium-interceptor.webp'),
    summary:
      'What interceptors do in Angular, how they sit between HttpClient and the server, and how to implement more than one of them.',
  },
  {
    title: 'Git Hook Husky 6 Lint and commitlint for JavaScript Projects',
    url: 'https://medium.com/codex/git-hook-husky-6-lint-prettier-eslint-and-commitlint-for-javascript-projects-8cee3589b6b8',
    image: img('medium-husky.webp'),
    summary:
      'Use Git hooks with Husky to lint commit messages, format the project with Prettier and ESLint, and keep JavaScript commits consistent.',
  },
  {
    title: 'Angular Reactive Form with Angular Material and Custom Validation',
    url: 'https://medium.com/codex/angular-reactive-form-including-angular-material-and-custom-validation-5b207a9a2106',
    image: img('medium-form.webp'),
    summary:
      'Implement a reactive Angular form with Angular Material and a custom, dynamic validator that changes with the selected role.',
  },
  {
    title: 'A Detailed Look at filter(), map(), and reduce() in JavaScript',
    url: 'https://medium.com/p/18d72f483ada',
    image: img('medium-javascript.webp'),
    summary:
      'A deep dive into filter, map, and reduce on Array.prototype in JavaScript, what each method does, and how they differ.',
  },
];

export const podcasts: Podcast[] = [
  {
    organization: 'Adventures in Angular',
    subject: 'Podcast Guest: Template Driven VS Reactive Forms',
    image: socialImage('adventure-in-angular.webp'),
    generalLink:
      'https://adventuresinangular.com/template-driven-approach-vs-reactive-form-approach-with-hossein-mousavi-aia-346',
    description:
      'A practical discussion on Angular form approaches and tradeoffs.',
    links: [
      {
        name: 'Spotify',
        icon: socialIconPath('Spotify'),
        link: 'https://open.spotify.com/episode/5BoFoH3WNYU5khCOCqtogz?si=QBVzySKXQkWZ_wbwP9ay8Q',
      },
      {
        name: 'Apple Podcast',
        icon: socialIconPath('Apple Podcast'),
        link: 'https://podcasts.apple.com/ph/podcast/template-driven-approach-vs-reactive-form-approach/id1238024888?i=1000559786754',
      },
      {
        name: 'Google Podcast',
        icon: socialIconPath('Google Podcast'),
        link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hZHZlbnR1cmVzaW5hbmd1bGFyLmNvbS9yc3M/episode/MGM3ZGNlOTktYWU0ZC00M2ZlLTg4YzAtYTE3NWQyZGU2ZmU5',
      },
      {
        name: 'Amazon Music',
        icon: socialIconPath('Amazon Music'),
        link: 'https://www.amazon.com/Adventures-in-Angular/dp/B08JJS6SNP',
      },
    ],
  },
];
