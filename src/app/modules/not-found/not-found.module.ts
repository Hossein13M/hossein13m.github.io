import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { NotFoundRoutingModule } from './not-found.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, MatCardModule, RouterModule, MatTooltipModule, MatDividerModule, NotFoundRoutingModule, MatIconModule, MatButtonModule],
})
export class NotFoundModule {}
