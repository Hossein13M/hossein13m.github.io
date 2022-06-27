import { Component } from '@angular/core';
import { CompanyModel } from '../../models/experience.model';
import { Companies } from '../../const/experiences';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
    public companies: Array<CompanyModel> = Companies;
    constructor() {}
}
