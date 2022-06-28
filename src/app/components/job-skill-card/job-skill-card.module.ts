import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSkillCardComponent } from './job-skill-card.component';
import { MatCardModule } from '@angular/material/card';
import { LabelModule } from '../label/label.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [JobSkillCardComponent],
    imports: [CommonModule, MatCardModule, LabelModule, MatDividerModule],
    exports: [JobSkillCardComponent],
})
export class JobSkillCardModule {}
