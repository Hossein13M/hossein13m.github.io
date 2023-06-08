export interface CompanyModel {
    companyId: number;
    logoUrl: string;
    name: string;
    industry: string;
    website: string;
    location: string;
    description: string;
}

export interface JobPositionModel {
    employmentType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Freelance' | 'Self-Employed';
    startDate: string;
    endDate: string;
    jobTitle: string;
    jobDescription: Array<string>;
    jobRequiredSkills: Array<string>;
    companyId: number;
}
