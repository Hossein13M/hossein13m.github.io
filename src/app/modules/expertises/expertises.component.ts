import { Component } from '@angular/core';
import { ExpertiseHeader, ExpertiseModel, ExpertiseType } from '../../models/expertise.model';
import { ExpertiseHeaders, Expertises } from '../../const/expertises';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-expertises',
    templateUrl: './expertises.component.html',
    styleUrls: ['./expertises.component.scss'],
})
export class ExpertisesComponent {
    public readonly expertises: Array<ExpertiseModel> = Expertises;
    public readonly expertiseHeaders: Array<ExpertiseHeader> = ExpertiseHeaders;
    public selected = this.fb.control('language');

    public selectedExpertiseType: ExpertiseType = 'language';

    constructor(private readonly fb: FormBuilder) {}

    public getProperNameForSelectBox(returnType: 'icon' | 'title'): string {
        return returnType === 'icon'
            ? this.expertiseHeaders.find((item) => item.type === this.selected.value)!.icon
            : this.expertiseHeaders.find((item) => item.type === this.selected.value)!.title;
    }
}
