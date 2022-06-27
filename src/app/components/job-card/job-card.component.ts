import { Component, Input } from '@angular/core';
import { JobPositionModel } from '../../models/experience.model';

@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
    @Input() experience!: JobPositionModel;
    constructor() {}
}
