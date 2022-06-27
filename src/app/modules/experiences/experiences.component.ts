import { Component } from '@angular/core';
import { CompanyModel, JobPositionModel } from '../../models/experience.model';
import { Companies, Experiences } from '../../const/experiences';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
    public companies: Array<CompanyModel> = Companies;
    public jobs: Array<JobPositionModel> = Experiences;
    constructor() {}
}
