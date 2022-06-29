export type SkillType = 'language' | 'framework' | 'softwareDevelopment';
export type ExpertiseLevel = 'Familiar' | 'Experienced' | 'Advanced' | 'Deep Knowledge';
export type ExpertiseLevelClassName = 'bg-red-700' | 'bg-sky-700' | 'bg-lime-700' | 'bg-violet-700';

export interface SkillModel {
    name: string;
    icon: string;
    level: ExpertiseLevel;
    type: SkillType;
}

export interface ExpertiseHeader {
    type: SkillType;
    title: string;
    icon: string;
}

export interface ExpertiseClass {
    level: ExpertiseLevel;
    className: ExpertiseLevelClassName;
}
