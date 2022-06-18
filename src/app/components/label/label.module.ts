import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [LabelComponent],
    imports: [CommonModule, MatIconModule],
    exports: [LabelComponent],
})
export class LabelModule {}
