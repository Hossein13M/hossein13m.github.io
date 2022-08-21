import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { PublicationItemComponent } from './publication-item.component';
import { LabelModule } from '../label/label.module';

@NgModule({
    declarations: [PublicationItemComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDividerModule, LabelModule],
    exports: [PublicationItemComponent],
})
export class PublicationItemModule {}
