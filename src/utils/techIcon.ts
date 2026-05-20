/** Custom PNGs in public/images/skills/ */
const SKILL_PNG_ICONS: Record<string, string> = {
  Angular: '/images/skills/angular.png',
  VueJS: '/images/skills/vueJS.png',
  NuxtJS: '/images/skills/nuxtJS.png',
  NestJS: '/images/skills/nestJS.png',
  'Node.js': '/images/skills/nodeJS.png',
  nodeJS: '/images/skills/nodeJS.png',
  React: '/images/skills/reactJS.png',
  ReactJS: '/images/skills/reactJS.png',
  JavaScript: '/images/skills/javaScript.png',
  TypeScript: '/images/skills/typeScript.png',
  'C#': '/images/skills/cSharp.png',
  SQL: '/images/skills/sql.png',
  Express: '/images/skills/expressJS.png',
  ExpressJS: '/images/skills/expressJS.png',
  'Bash Script': '/images/skills/bashScript.png',
  Docker: '/images/skills/docker.png',
  Cypress: '/images/skills/cypress.png',
  Agile: '/images/skills/agile.png',
  Git: '/images/skills/git.png',
  Vite: '/images/skills/vite.png',
  AWS: '/images/skills/aws.png',
};

/** Maps display labels to simple-icons slug (public/icons/tech/{slug}.svg) */
const TECH_SLUG_MAP: Record<string, string> = {
  JavaScript: 'javascript',
  'JavaScript ES6+': 'javascript',
  TypeScript: 'typescript',
  'C#': 'csharp',
  '.NET': 'dotnet',
  dotnet: 'dotnet',
  Angular: 'angular',
  Nx: 'nx',
  'Node.js': 'nodedotjs',
  nodeJS: 'nodedotjs',
  NestJS: 'nestjs',
  VueJS: 'vuedotjs',
  NuxtJS: 'nuxtdotjs',
  React: 'react',
  ReactJS: 'react',
  NextJS: 'nextdotjs',
  Express: 'express',
  ExpressJS: 'express',
  'CI/CD': 'githubactions',
  AWS: 'amazonaws',
  Azure: 'azure',
  Docker: 'docker',
  AI: 'openai',
  Git: 'git',
  Linux: 'linux',
  Agile: 'scrum',
  Scrum: 'scrum',
  Jira: 'jira',
  HTML: 'html5',
  'Semantic HTML / HTML5': 'html5',
  CSS: 'css3',
  'CSS / SCSS / PostCSS': 'css3',
  Sass: 'sass',
  'Tailwind CSS': 'tailwindcss',
  Bootstrap: 'bootstrap',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  SQL: 'mysql',
  GraphQL: 'graphql',
  tRPC: 'trpc',
  Kubernetes: 'kubernetes',
  Vitest: 'vitest',
  Playwright: 'playwright',
  Jest: 'jest',
  Cypress: 'cypress',
  Webpack: 'webpack',
  Vite: 'vite',
  Pinia: 'pinia',
  NgRx: 'ngrx',
  Redux: 'redux',
  RxJS: 'reactivex',
  Storybook: 'storybook',
  ChartJS: 'chartdotjs',
  'GitHub Actions': 'githubactions',
  'GitHub Copilot': 'github',
  Cursor: 'cursor',
  OpenAI: 'openai',
  Anthropic: 'anthropic',
  Gemini: 'googlegemini',
  Datadog: 'datadog',
  'REST API': 'openapiinitiative',
  MikroTik: 'mikrotik',
  'Active Directory': 'microsoft',
  'PCI tokenization': 'visa',
};

export function techIconSlug(label: string): string | undefined {
  if (TECH_SLUG_MAP[label]) return TECH_SLUG_MAP[label];
  const normalized = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .replace(/dotjs$/, 'dotjs');
  return normalized.length > 1 ? normalized : undefined;
}

export function techIconPath(label: string): string | undefined {
  if (SKILL_PNG_ICONS[label]) return SKILL_PNG_ICONS[label];
  const slug = techIconSlug(label);
  return slug ? `/icons/tech/${slug}.svg` : undefined;
}
