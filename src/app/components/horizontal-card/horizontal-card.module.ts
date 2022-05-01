import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from './horizontal-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [HorizontalCardComponent],
    imports: [CommonModule, MatCardModule, MatTooltipModule, MatDividerModule, MatButtonModule, MatIconModule],
    exports: [HorizontalCardComponent],
})
export class HorizontalCardModule {}
