import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BaseInfoComponent } from './base-info.component';

@NgModule({
    declarations: [BaseInfoComponent],
    exports: [BaseInfoComponent],
    imports: [CommonModule, MatIconModule],
})
export class BaseInfoModule {}
