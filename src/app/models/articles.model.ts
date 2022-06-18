export interface ArticlesModel {
    title: string;
    url: string;
    imgUrl: string;
    summary: string;
    publisher: 'Medium' | 'Virgool' | 'Testfully';
    publicationUrl: string;
    language: 'Persian' | 'English';
    category: 'Tech' | 'Personal Growth';
}
