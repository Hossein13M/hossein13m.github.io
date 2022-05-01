import { Component, Input } from '@angular/core';
import { HorizontalCardComponent, PodcastModel } from '../../models/podcast.model';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent {
    @Input() podcast!: PodcastModel;
    @Input() componentType!: HorizontalCardComponent;

    constructor() {}
}
