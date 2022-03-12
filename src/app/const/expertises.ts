import { ExpertiseClass, ExpertiseHeader, ExpertiseModel } from '../models/expertise.model';

export const Expertises: Array<ExpertiseModel> = [
    // languages
    { name: 'JavaScript', icon: 'javaScript', type: 'language', level: 'Deep Knowledge' },
    { name: 'TypeScript', icon: 'typeScript', type: 'language', level: 'Deep Knowledge' },
    { name: 'HTML', icon: 'html', type: 'language', level: 'Advanced' },
    { name: 'CSS', icon: 'css', type: 'language', level: 'Advanced' },
    { name: 'Sass', icon: 'sass', type: 'language', level: 'Advanced' },
    { name: 'Bash Script', icon: 'bashScript', type: 'language', level: 'Experienced At' },
    { name: 'C#', icon: 'cSharp', type: 'language', level: 'Familiar' },
    { name: 'SQL', icon: 'sql', type: 'language', level: 'Familiar' },
    // frameworks, libraries, and runtimes
    { name: 'Angular', icon: 'angular', type: 'framework', level: 'Deep Knowledge' },
    { name: 'NodeJS', icon: 'nodeJS', type: 'framework', level: 'Experienced At' },
    { name: 'NestJS', icon: 'nestJS', type: 'framework', level: 'Experienced At' },
    { name: 'VueJS', icon: 'vueJS', type: 'framework', level: 'Advanced' },
    { name: 'NuxtJS', icon: 'nuxtJS', type: 'framework', level: 'Advanced' },
    { name: 'ReactJS', icon: 'reactJS', type: 'framework', level: 'Familiar' },
    { name: 'ExpressJS', icon: 'expressJS', type: 'framework', level: 'Experienced At' },
    { name: 'Tailwinds', icon: 'tailwindsCss', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Bootstrap', icon: 'bootstrap', type: 'framework', level: 'Advanced' },
    { name: 'Angular Material', icon: 'angularMaterial', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Vuetify', icon: 'vuetify', type: 'framework', level: 'Experienced At' },
    { name: 'AmCharts', icon: 'amCharts', type: 'framework', level: 'Advanced' },
    // software development tools
    { name: 'Networking', icon: 'network', type: 'softwareDevelopment', level: 'Deep Knowledge' },
    { name: 'Windows Server', icon: 'windowsServer', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Linux', icon: 'linux', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Git', icon: 'git', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Docker', icon: 'docker', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Agile Methodology', icon: 'agile', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Adobe Photoshop', icon: 'adobePhotoshop', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Clean Code', icon: 'cleanCode', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Responsive Design', icon: 'responsiveDesign', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Functional Programming', icon: 'functionalProgramming', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'OOP', icon: 'objectOrientedProgramming', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'REST API', icon: 'restAPI', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'Design Patterns', icon: 'designPatterns', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'SOLID Principles', icon: 'solid', type: 'softwareDevelopment', level: 'Familiar' },
    { name: 'PWA', icon: 'pwa', type: 'softwareDevelopment', level: 'Experienced At' },
    { name: 'WebPack', icon: 'webpack', type: 'softwareDevelopment', level: 'Familiar' },
];

export const ExpertiseHeaders: Array<ExpertiseHeader> = [
    { type: 'language', title: 'Languages', icon: 'code' },
    { type: 'framework', title: 'Frameworks, and Libraries', icon: 'terminal' },
    { type: 'softwareDevelopment', title: 'Concepts and Tools', icon: 'design_services' },
];

export const ExpertiseClasses: Array<ExpertiseClass> = [
    { level: 'Familiar', className: 'bg-sky-700' },
    { level: 'Experienced At', className: 'bg-lime-700' },
    { level: 'Advanced', className: 'bg-violet-700' },
    { level: 'Deep Knowledge', className: 'bg-red-700' },
];
