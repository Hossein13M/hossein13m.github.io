import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsCardComponent } from './skills-card.component';
import { MatCardModule } from '@angular/material/card';
import { LabelModule } from '../label/label.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [SkillsCardComponent],
    imports: [CommonModule, MatCardModule, LabelModule, MatDividerModule],
    exports: [SkillsCardComponent],
})
export class SkillsCardModule {}
