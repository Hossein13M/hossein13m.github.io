import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PodcastComponent],
    imports: [CommonModule, MatCardModule, MatTooltipModule, MatDividerModule, MatButtonModule, MatIconModule],
    exports: [PodcastComponent],
})
export class PodcastModule {}
