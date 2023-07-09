import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AdpBtnComponent } from './adp-btn.component';

@NgModule({
    declarations: [AdpBtnComponent],
    exports: [AdpBtnComponent],
    imports: [CommonModule, MatButtonModule],
})
export class AdpBtnModule {}
