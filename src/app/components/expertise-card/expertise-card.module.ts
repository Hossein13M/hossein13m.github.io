import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseCardComponent } from './expertise-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LevelBadgeModule } from '../level-badge/level-badge.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [ExpertiseCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, LevelBadgeModule, MatTooltipModule],
    exports: [ExpertiseCardComponent],
})
export class ExpertiseCardModule {}
