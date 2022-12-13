import { Component } from '@angular/core';
import { ArticlesModel } from '../../models/articles.model';
import { HorizontalComponentModel } from '../../models/horizontal-component.model';
import { Articles } from '../../const/articles';
import { Podcasts } from '../../const/podcasts';

@Component({
    selector: 'app-contents',
    template: `
        <div class="mb-4">
            <div *ngFor="let podcast of podcasts" class="mb-3">
                <app-horizontal-card [componentInfo]="podcast" [componentType]="{ type: 'Podcast', icon: 'podcasts' }"></app-horizontal-card>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
                <app-publication-item *ngFor="let article of articles" [article]="article"></app-publication-item>
            </div>
        </div>
    `,
})
export class ContentsComponent {
    public articles: Array<ArticlesModel> = Articles;
    public podcasts: Array<HorizontalComponentModel> = Podcasts;

    constructor() {}
}
