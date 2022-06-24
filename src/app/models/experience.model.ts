export interface CompanyModel {
    logoUrl: string;
    name: string;
    industry: string;
    website: string;
    location: string;
}

export interface JobPositionModel {
    employmentType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Freelance' | 'Self-Employed';
    startDate: Date;
    endDate: Date;
    jobTitle: string;
    jobDescription: string;
    jobRequiredSkills: Array<string>;
}

export interface ExperienceModel {
    company: CompanyModel;
    jobPosition: JobPositionModel;
}
