import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SkillCardComponent } from './skill-card.component';
import { LevelBadgeModule } from '../level-badge/level-badge.module';

@NgModule({
    declarations: [SkillCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, LevelBadgeModule, MatTooltipModule],
    exports: [SkillCardComponent],
})
export class SkillCardModule {}
