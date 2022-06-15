import { Component, Input } from '@angular/core';
import { ProgressSpinner } from '../../models/progress-spinner.model';

@Component({
    selector: 'app-progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
    @Input() progressSpinnerSetting!: ProgressSpinner;
}
