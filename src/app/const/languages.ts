import { Language } from '../models/language.model';

export const Languages: Array<Language> = [
    {
        name: 'Azeri',
        proficiencyPercent: 85,
        proficiencyWithinText: 'A',
        languageCode: 'az',
    },
    {
        name: 'English',
        proficiencyPercent: 85,
        proficiencyWithinText: 'A',
        languageCode: 'en',
        emblemUrl: '../../../assets/images/flags/English.png',
    },
    {
        name: 'Deutsch',
        proficiencyPercent: 30,
        proficiencyWithinText: 'C',
        languageCode: 'de',
        emblemUrl: '../../../assets/images/flags/Deutsch.png',
    },
    {
        name: 'Persian',
        proficiencyPercent: 100,
        proficiencyWithinText: 'A',
        languageCode: 'per',
        emblemUrl: '../../../assets/images/flags/Persian.png',
    },
];
