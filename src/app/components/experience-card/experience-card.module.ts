import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { ExperienceCardComponent } from './experience-card.component';
import { LabelModule } from '../label/label.module';

@NgModule({
    declarations: [ExperienceCardComponent],
    imports: [CommonModule, MatCardModule, MatTooltipModule, LabelModule, MatDividerModule, MatIconModule],
    exports: [ExperienceCardComponent],
})
export class ExperienceCardModule {}
