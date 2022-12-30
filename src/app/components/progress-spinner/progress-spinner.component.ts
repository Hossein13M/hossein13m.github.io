import { Component, Input } from '@angular/core';
import type { ProgressSpinner } from '../../models/progress-spinner.model';

@Component({
    selector: 'app-progress-spinner',
    template: `
        <div>
            <mat-progress-spinner
                [diameter]="progressSpinnerSetting.spinnerDiameter"
                [value]="progressSpinnerSetting.progressValue"
                mode="determinate"
                strokeWidth="4"
            >
            </mat-progress-spinner>
            <div [style.bottom]="progressSpinnerSetting.bottomMargin" class="relative flex justify-center items-center dark:text-custom-grey-500 text-black">
                {{ progressSpinnerSetting.insideText }}
            </div>
        </div>
        <label class="flex justify-center dark:text-custom-grey-500 text-black">{{ progressSpinnerSetting.labelText }}</label>
    `,
})
export class ProgressSpinnerComponent {
    @Input() progressSpinnerSetting!: ProgressSpinner;
}
