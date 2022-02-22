import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInfoComponent } from './base-info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [BaseInfoComponent],
    exports: [BaseInfoComponent],
    imports: [CommonModule, MatIconModule],
})
export class BaseInfoModule {}
