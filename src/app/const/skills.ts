import type { SkillClass, SkillHeader, SkillModel } from '../models/skill.model';

export const Skills: Array<SkillModel> = [
    // languages
    { name: 'JavaScript', icon: 'javaScript', type: 'language', level: 'Deep Knowledge' },
    { name: 'TypeScript', icon: 'typeScript', type: 'language', level: 'Deep Knowledge' },
    { name: 'HTML', icon: 'html', type: 'language', level: 'Advanced' },
    { name: 'CSS', icon: 'css', type: 'language', level: 'Advanced' },
    { name: 'Sass', icon: 'sass', type: 'language', level: 'Advanced' },
    { name: 'Bash Script', icon: 'bashScript', type: 'language', level: 'Experienced' },
    { name: 'C#', icon: 'cSharp', type: 'language', level: 'Familiar' },
    { name: 'SQL', icon: 'sql', type: 'language', level: 'Experienced' },
    // frameworks, libraries, and runtimes
    { name: 'Angular', icon: 'angular', type: 'framework', level: 'Deep Knowledge' },
    { name: 'VueJS', icon: 'vueJS', type: 'framework', level: 'Advanced' },
    { name: 'ReactJS', icon: 'reactJS', type: 'framework', level: 'Experienced' },
    { name: 'NuxtJS', icon: 'nuxtJS', type: 'framework', level: 'Experienced' },
    { name: 'NextJS', icon: 'nextJS', type: 'framework', level: 'Experienced' },
    { name: 'AmCharts', icon: 'amCharts', type: 'framework', level: 'Advanced' },
    { name: 'NodeJS', icon: 'nodeJS', type: 'framework', level: 'Experienced' },
    { name: 'ExpressJS', icon: 'expressJS', type: 'framework', level: 'Familiar' },
    { name: 'NestJS', icon: 'nestJS', type: 'framework', level: 'Experienced' },
    { name: 'Angular Material', icon: 'angularMaterial', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Vuetify', icon: 'vuetify', type: 'framework', level: 'Experienced' },
    { name: 'MUI', icon: 'mui', type: 'framework', level: 'Experienced' },
    { name: 'Tailwind CSS', icon: 'tailwindCss', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Bootstrap', icon: 'bootstrap', type: 'framework', level: 'Advanced' },
    // software development tools
    { name: 'Network', icon: 'network', type: 'softwareDevelopment', level: 'Deep Knowledge' },
    { name: 'Windows Server', icon: 'windowsServer', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Linux', icon: 'linux', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Git', icon: 'git', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Docker', icon: 'docker', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'Agile', icon: 'agile', type: 'softwareDevelopment', level: 'Deep Knowledge' },
    { name: 'Adobe Photoshop', icon: 'adobePhotoshop', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'Clean Code', icon: 'cleanCode', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Responsive Design', icon: 'responsiveDesign', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Functional Programming', icon: 'functionalProgramming', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'OOP', icon: 'objectOrientedProgramming', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'REST API', icon: 'restAPI', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Design Patterns', icon: 'designPatterns', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'SOLID Principles', icon: 'solid', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'PWA', icon: 'pwa', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'WebPack', icon: 'webpack', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Vite', icon: 'vite', type: 'softwareDevelopment', level: 'Experienced' },
    { name: 'Cypress', icon: 'cypress', type: 'softwareDevelopment', level: 'Familiar' },
];

export const SkillHeaders: Array<SkillHeader> = [
    { type: 'language', title: 'Languages', icon: 'code' },
    { type: 'framework', title: 'Frameworks, and Libraries', icon: 'terminal' },
    { type: 'softwareDevelopment', title: 'Concepts and Tools', icon: 'design_services' },
];

export const SkillClasses: Array<SkillClass> = [
    { level: 'Familiar', className: 'bg-sky-700' },
    { level: 'Experienced', className: 'bg-lime-700' },
    { level: 'Advanced', className: 'bg-violet-700' },
    { level: 'Deep Knowledge', className: 'bg-red-700' },
];
