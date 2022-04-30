import { Component } from '@angular/core';
import { ArticlesModel } from '../../models/articles.model';
import { PodcastModel } from '../../models/podcast.model';
import { Articles } from '../../const/articles';
import { Podcasts } from '../../const/podcasts';

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent {
    public articles: Array<ArticlesModel> = Articles;
    public podcasts: Array<PodcastModel> = Podcasts;

    constructor() {}
}
