import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelModule } from '../label/label.module';

@NgModule({
    declarations: [JobCardComponent],
    exports: [JobCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, LabelModule],
})
export class JobCardModule {}
