import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card.component';
import { MatCardModule } from '@angular/material/card';
import { LabelModule } from '../label/label.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [SkillCardComponent],
    imports: [CommonModule, MatCardModule, LabelModule, MatDividerModule],
    exports: [SkillCardComponent],
})
export class SkillCardModule {}
