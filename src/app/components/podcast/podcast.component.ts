import { Component, Input } from '@angular/core';
import { PodcastModel } from '../../models/podcast.model';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent {
    @Input() podcast!: PodcastModel;
    constructor() {}
}
