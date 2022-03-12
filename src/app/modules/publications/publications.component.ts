import { Component } from '@angular/core';
import { ArticlesModel } from '../../models/articles.model';
import { Articles } from '../../const/articles';

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent {
    public articles: Array<ArticlesModel> = Articles;

    constructor() {}
}
