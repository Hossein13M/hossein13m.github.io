import { Component } from '@angular/core';
import { ExperienceModel } from '../../models/experience.model';
import { Experiences } from '../../const/experiences';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
    public experiences: Array<ExperienceModel> = Experiences;
    constructor() {}
}
