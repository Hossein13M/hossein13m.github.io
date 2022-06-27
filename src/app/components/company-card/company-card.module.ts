import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LabelModule } from '../label/label.module';

@NgModule({
    declarations: [CompanyCardComponent],
    imports: [CommonModule, MatTooltipModule, MatCardModule, MatDividerModule, LabelModule],
    exports: [CompanyCardComponent],
})
export class CompanyCardModule {}
