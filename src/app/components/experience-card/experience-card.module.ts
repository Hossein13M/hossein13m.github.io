import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from './experience-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelModule } from '../label/label.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ExperienceCardComponent],
    imports: [CommonModule, MatCardModule, MatTooltipModule, LabelModule, MatDividerModule, MatIconModule],
    exports: [ExperienceCardComponent],
})
export class ExperienceCardModule {}
