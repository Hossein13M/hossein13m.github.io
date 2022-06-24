import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from './experience-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelModule } from '../label/label.module';

@NgModule({
    declarations: [ExperienceCardComponent],
    exports: [ExperienceCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, LabelModule],
})
export class ExperienceCardModule {}
