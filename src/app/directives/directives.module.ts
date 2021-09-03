import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerDirective } from './progress-spinner/progress-spinner.directive';

@NgModule({
    declarations: [ProgressSpinnerDirective],
    imports: [CommonModule],
    exports: [ProgressSpinnerDirective],
})
export class DirectivesModule {}
