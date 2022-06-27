import { Component, Input } from '@angular/core';
import { JobPositionModel } from '../../models/experience.model';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
    @Input() experience!: JobPositionModel;
    constructor() {}
}
