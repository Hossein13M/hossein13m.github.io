export type SkillType = 'language' | 'framework' | 'softwareDevelopment';
export type SkillLevel = 'Familiar' | 'Experienced' | 'Advanced' | 'Deep Knowledge';
export type SkillLevelClassName = 'bg-red-700' | 'bg-sky-700' | 'bg-lime-700' | 'bg-violet-700';

export interface SkillModel {
    name: string;
    icon: string;
    level: SkillLevel;
    type: SkillType;
}

export interface ExpertiseHeader {
    type: SkillType;
    title: string;
    icon: string;
}

export interface ExpertiseClass {
    level: SkillLevel;
    className: SkillLevelClassName;
}
