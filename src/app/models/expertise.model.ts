export type ExpertiseType = 'language' | 'framework' | 'softwareDevelopment';
export type ExpertiseLevel = 'Familiar' | 'Experienced' | 'Advanced' | 'Deep Knowledge';
export type ExpertiseLevelClassName = 'bg-red-700' | 'bg-sky-700' | 'bg-lime-700' | 'bg-violet-700';

export interface ExpertiseModel {
    name: string;
    icon: string;
    level: ExpertiseLevel;
    type: ExpertiseType;
}

export interface ExpertiseHeader {
    type: ExpertiseType;
    title: string;
    icon: string;
}

export interface ExpertiseClass {
    level: ExpertiseLevel;
    className: ExpertiseLevelClassName;
}
