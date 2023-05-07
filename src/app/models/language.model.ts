export type LanguageCode = 'per' | 'en' | 'az' | 'de';

export interface Language {
    name: string;
    proficiencyPercent: number;
    proficiencyWithinText: string;
    emblemUrl?: string;
    languageCode: LanguageCode;
}
