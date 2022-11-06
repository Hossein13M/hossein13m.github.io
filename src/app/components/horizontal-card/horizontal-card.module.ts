import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HorizontalCardComponent } from './horizontal-card.component';

@NgModule({
    declarations: [HorizontalCardComponent],
    imports: [CommonModule, MatCardModule, MatTooltipModule, MatDividerModule, MatButtonModule, MatIconModule],
    exports: [HorizontalCardComponent],
})
export class HorizontalCardModule {}
