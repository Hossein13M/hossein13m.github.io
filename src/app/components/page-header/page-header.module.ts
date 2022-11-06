import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent],
    imports: [CommonModule, MatIconModule],
})
export class PageHeaderModule {}
