import { Component, Input, OnChanges } from '@angular/core';
import { ExpertiseHeader, ExpertiseModel, ExpertiseType } from '../../models/expertise.model';
import { ExpertiseHeaders, Expertises } from '../../const/expertises';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnChanges {
    @Input() expertiseType!: ExpertiseType;
    @Input() componentMinHeight: string = '340px';
    public header!: ExpertiseHeader;
    public expertises: Array<ExpertiseModel> = [];

    constructor() {}

    ngOnChanges(): void {
        this.getProperExpertise();
    }

    private getProperExpertise(): void {
        this.expertises = [];
        Expertises.forEach((expertise) => expertise.type === this.expertiseType && this.expertises.push(expertise));
        this.header = ExpertiseHeaders.find((expertise) => expertise.type === this.expertiseType)!;
    }
}
