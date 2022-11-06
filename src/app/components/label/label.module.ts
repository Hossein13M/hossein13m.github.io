import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LabelComponent } from './label.component';

@NgModule({
    declarations: [LabelComponent],
    imports: [CommonModule, MatIconModule],
    exports: [LabelComponent],
})
export class LabelModule {}
