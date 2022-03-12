import { ExpertiseClass, ExpertiseHeader, ExpertiseModel } from '../models/expertise.model';

export const Expertises: Array<ExpertiseModel> = [
    // languages
    { name: 'JavaScript', icon: 'asd', type: 'language', level: 'Deep Knowledge' },
    { name: 'TypeScript', icon: 'asd', type: 'language', level: 'Deep Knowledge' },
    { name: 'HTML', icon: 'asd', type: 'language', level: 'Advanced' },
    { name: 'CSS', icon: 'asd', type: 'language', level: 'Advanced' },
    { name: 'Sass', icon: 'asd', type: 'language', level: 'Advanced' },
    { name: 'Bash Script', icon: 'asd', type: 'language', level: 'Experienced At' },
    { name: 'C#', icon: 'asd', type: 'language', level: 'Familiar With' },
    { name: 'SQL', icon: 'asd', type: 'language', level: 'Familiar With' },
    // frameworks, libraries, and runtimes
    { name: 'Angular', icon: 'asd', type: 'framework', level: 'Deep Knowledge' },
    { name: 'NodeJS', icon: 'asd', type: 'framework', level: 'Experienced At' },
    { name: 'NestJS', icon: 'asd', type: 'framework', level: 'Experienced At' },
    { name: 'VueJS', icon: 'asd', type: 'framework', level: 'Advanced' },
    { name: 'NuxtJS', icon: 'asd', type: 'framework', level: 'Advanced' },
    { name: 'ReactJS', icon: 'asd', type: 'framework', level: 'Familiar With' },
    { name: 'ExpressJS', icon: 'asd', type: 'framework', level: 'Experienced At' },
    { name: 'TailwindsCSS', icon: 'asd', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Bootstrap', icon: 'asd', type: 'framework', level: 'Advanced' },
    { name: 'Angular Material', icon: 'asd', type: 'framework', level: 'Deep Knowledge' },
    { name: 'Vuetify', icon: 'asd', type: 'framework', level: 'Experienced At' },
    { name: 'AmCharts', icon: 'asd', type: 'framework', level: 'Advanced' },
    // software development tools
    { name: 'Network Fundamentals', icon: 'asd', type: 'softwareDevelopment', level: 'Deep Knowledge' },
    { name: 'Windows Server', icon: 'asd', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Linux', icon: 'asd', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Git', icon: 'asd', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Docker', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Agile Methodology', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Adobe Photoshop', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Clean Code Concepts', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Responsive Design', icon: 'asd', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'Functional Programming', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Object Oriented Programming', icon: 'asd', type: 'softwareDevelopment', level: 'Advanced' },
    { name: 'REST API', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'Design Patterns', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
    { name: 'SOLID Principles', icon: 'asd', type: 'softwareDevelopment', level: 'Familiar With' },
];

export const ExpertiseHeaders: Array<ExpertiseHeader> = [
    { type: 'language', title: 'Languages', icon: 'code' },
    { type: 'framework', title: 'Frameworks, and Libraries', icon: 'terminal' },
    { type: 'softwareDevelopment', title: 'Concepts and Tools', icon: 'design_services' },
];

export const ExpertiseClasses: Array<ExpertiseClass> = [
    { level: 'Familiar With', className: 'bg-sky-700' },
    { level: 'Experienced At', className: 'bg-lime-700' },
    { level: 'Advanced', className: 'bg-violet-700' },
    { level: 'Deep Knowledge', className: 'bg-red-700' },
];
