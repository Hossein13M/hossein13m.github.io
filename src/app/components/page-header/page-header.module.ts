import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent],
    imports: [CommonModule, MatIconModule],
})
export class PageHeaderModule {}
