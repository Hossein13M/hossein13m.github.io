import { Component, Input } from '@angular/core';
import { ExperienceModel } from '../../models/experience.model';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
    @Input() experience!: ExperienceModel;
    constructor() {}
}
