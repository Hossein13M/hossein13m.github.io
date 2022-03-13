export interface ArticlesModel {
    title: string;
    url: string;
    imgUrl: string;
    summary: string;
    publisher: 'Medium' | 'Virgool' | 'Testfully';
    publicationUrl: string;
}
