import { Component, Input, OnInit } from '@angular/core';
import type { CompanyModel, JobPositionModel } from '../../models/experience.model';
import { Companies } from '../../const/experiences';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent implements OnInit {
    @Input() job!: JobPositionModel;
    public company!: CompanyModel;
    constructor() {}

    ngOnInit(): void {
        this.company = this.getCompany(this.job.companyId);
    }

    private getCompany(companyId: number): CompanyModel {
        return Companies.find((company) => company.companyId === companyId)!;
    }
}
