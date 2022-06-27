import { CompanyModel, JobPositionModel } from '../models/experience.model';

export const Companies: Array<CompanyModel> = [
    {
        companyId: 0,
        logoUrl: 'alibaba',
        name: 'AliBaba Travels.Co',
        industry: 'Travel Arrangements',
        website: 'https://www.alibaba.ir',
        location: 'Tehran - Iran',
        description:
            'Alibaba travels Co. has been active in Iran’s travel and tourist business since January 2014 as a startup. Alibaba Travels Co. is the pioneer of online travel services in Iran. Our offices are located in Tehran. We are providing innovative, competitive and enjoyable services for the people who visit Iran and all Iranians traveling around the world',
    },
    {
        companyId: 1,
        logoUrl: 'tamadon',
        name: 'Tamadon Investment Bank',
        industry: 'Financial Services',
        website: 'https://tamadonib.com/en',
        location: 'Tehran - Iran',
        description:
            'Tamadon Investment Bank is a full service investment bank that mainly focuses on Iran’s capital markets and is registered with and regulated by the Securities and Exchange Organization of Iran.',
    },
    {
        companyId: 2,
        logoUrl: 'testfully',
        name: 'Testfully',
        industry: 'Software Development',
        website: 'https://testfully.io',
        location: 'Sydney - Australia',
        description: 'Our tool enables you to efficiently test APIs while building them, and monitor them post-release.',
    },
    {
        companyId: 3,
        logoUrl: 'tapsell',
        name: 'Tapsell',
        industry: 'Advertising Services',
        website: 'https://tapsell.ir/en',
        location: 'Tehran - Iran',
        description:
            'From the beginning, we knew having the expertise, knowledge and passion for developing new features and the foresight in the industry, would lead us well ahead of the curve. In a few years, we’ve become the most reputable and most trusted network in the industry. We take  pride in bringing advertisers and publishers together while providing not only the best offers on variety of tags and verticals and high-grade traffic to promote but also offerings of  high proficiency with well-designed creatives and the leading-edge monetization tools available on the market.',
    },
    {
        companyId: 4,
        logoUrl: 'xepos',
        name: 'XEPOS LTD',
        industry: 'IT Services and IT Consulting',
        website: 'https://xepos.co.uk',
        location: 'Birmingham - United Kingdom',
        description: 'Our EPOS solutions can adapt to your environment Tell us your area of business, and find out how we’re the perfect fit',
    },
];

export const Experiences: Array<JobPositionModel> = [
    {
        companyId: 0,
        employmentType: 'Full-Time',
        startDate: 'May 2022',
        endDate: 'Present',
        jobTitle: 'Front End Engineer',
        jobDescription:
            "My daily routing in Iran's largest Travel arrangements company is to maintain and develop panels using Vue3, review other developers' code, attending to design meetings to ensure the best quality of work.",
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'VueJS', 'NuxtJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwinds'],
    },
    {
        companyId: 1,
        employmentType: 'Part-Time',
        startDate: 'March 2022',
        endDate: 'Present',
        jobTitle: 'Software Engineer',
        jobDescription:
            'As a Software Engineer, I am responsible for designing high-quality software. Maintaining current software, developing and adding new features, and co-operating with other team-members is all part of my daily routine. I am using Angular and NestJS for this purpose.',
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'Angular', 'NestJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwinds', 'SQL', 'Docker'],
    },
    {
        companyId: 1,
        employmentType: 'Full-Time',
        startDate: 'December 2020',
        endDate: 'March 2022',
        jobTitle: 'Software Engineer',
        jobDescription:
            'As a Software Engineer, I am responsible for designing high-quality software. Maintaining current software, developing and adding new features, and co-operating with other team-members is all part of my daily routine. I am using Angular and NestJS for this purpose.',
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'Angular', 'NestJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwinds', 'SQL', 'Docker'],
    },
    {
        companyId: 2,
        employmentType: 'Contract',
        startDate: 'November 2021',
        endDate: 'February 2022',
        jobTitle: 'Technical Writer',
        jobDescription:
            'As a contract, I was responsible for writing technical articles about Testing and APIs to improve Testfully SEO. I have written multiple content for them during my contract.',
        jobRequiredSkills: ['API', 'SEO', 'Testing'],
    },
    {
        companyId: 3,
        employmentType: 'Part-Time',
        startDate: 'December 2020',
        endDate: 'May 2021',
        jobTitle: 'Front End Engineer',
        jobDescription:
            'As a Part of Tapsell Frontend developers, I am working with Angular in the MediaAd team. In addition, I am Responsible for developing and maintaining several panels for the MediaAd platform. The technologies that I am working with are Angular 8, GitFlow, Jenkins, etc.',
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'React', 'Gatsby', 'HTML', 'CSS'],
    },
    {
        companyId: 3,
        employmentType: 'Full-Time',
        startDate: 'January 2020',
        endDate: 'December 2021',
        jobTitle: 'Front End Engineer',
        jobDescription:
            'As a Part of Tapsell Frontend developers, I am working with Angular in the MediaAd team. In addition, I am Responsible for developing and maintaining several panels for the MediaAd platform. The technologies that I am working with are Angular 8, GitFlow, Jenkins, etc.',
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'React', 'Gatsby', 'HTML', 'CSS'],
    },
    {
        companyId: 4,
        employmentType: 'Full-Time',
        startDate: 'May 2019',
        endDate: 'August 2019',
        jobTitle: 'Front End Developer',
        jobDescription:
            'I am working in a team consisting of three Front End developers and a team of Back End developers for implementing, designing, and maintaining the Fin-Tech software, Also Known As XE-Hospitality. Also have worked on an eCommerce project for designing a website for our customers.',
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'HTML', 'CSS'],
    },
    {
        companyId: 4,
        employmentType: 'Full-Time',
        startDate: 'September 2018',
        endDate: 'May 2019',
        jobTitle: 'Technical Help Desk Lead',
        jobDescription:
            "Responsible for teaching and organizing the support team consisting of twelve people. Responsible for PDQ card terminals and their integration with Gateways and being in touch with banks of the UK to cover their dependencies and integrate with our software and maintain, update and install the software and manipulate the customers' database. Create tasks and help developers to work with the POS software AKA XE-Convenience.",
        jobRequiredSkills: ['Team Management', 'SQL Server', 'Electron', 'DNS Server', 'WSUS', 'VPN', 'Linux'],
    },
    {
        companyId: 4,
        employmentType: 'Full-Time',
        startDate: 'July 2018',
        endDate: 'September 2018',
        jobTitle: 'Technical Help Desk',
        jobDescription:
            'Help Desk and responsible for Network configuration. Responsible for supporting customers, installing, updating and maintaining their tills.',
        jobRequiredSkills: ['SQL Server', 'Electron', 'DNS Server', 'WSUS', 'VPN', 'Linux'],
    },
];
