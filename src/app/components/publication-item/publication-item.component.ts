import { Component, Input } from '@angular/core';
import type { ArticlesModel } from '../../models/articles.model';

@Component({
    selector: 'app-publication-item',
    templateUrl: './publication-item.component.html',
    styleUrls: ['./publication-item.component.scss'],
})
export class PublicationItemComponent {
    @Input() article!: ArticlesModel;

    constructor() {}
}
