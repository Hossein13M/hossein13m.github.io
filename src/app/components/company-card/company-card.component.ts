import { Component, Input } from '@angular/core';
import { CompanyModel } from '../../models/experience.model';

@Component({
    selector: 'app-company-card',
    templateUrl: './company-card.component.html',
    styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent {
    @Input() company!: CompanyModel;
    constructor() {}
}
