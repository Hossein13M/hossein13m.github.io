import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LevelBadgeModule } from '../level-badge/level-badge.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SkillCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, LevelBadgeModule, MatTooltipModule],
    exports: [SkillCardComponent],
})
export class SkillCardModule {}
