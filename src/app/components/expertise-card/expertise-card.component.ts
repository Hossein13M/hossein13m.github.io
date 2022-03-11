import { Component, Input, OnChanges } from '@angular/core';
import { ExpertiseHeader, ExpertiseModel, ExpertiseType } from '../../models/expertise.model';
import { ExpertiseHeaders, Expertises } from '../../const/expertises';

@Component({
    selector: 'app-expertise-card',
    templateUrl: './expertise-card.component.html',
    styleUrls: ['./expertise-card.component.scss'],
})
export class ExpertiseCardComponent implements OnChanges {
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
        Expertises.map((expertise) => expertise.type === this.expertiseType && this.expertises.push(expertise));
        this.header = ExpertiseHeaders.find((expertise) => expertise.type === this.expertiseType)!;
    }
}
