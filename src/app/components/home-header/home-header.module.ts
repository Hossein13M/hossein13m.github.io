import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeHeaderComponent } from './home-header.component';
import { AnimationButtonModule } from '../animation-button/animation-button.module';
import { AdpBtnModule } from '../adp-btn/adp-btn.module';

@NgModule({
    declarations: [HomeHeaderComponent],
    exports: [HomeHeaderComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatTooltipModule,
        RouterModule,
        AnimationButtonModule,
        AdpBtnModule,
    ],
})
export class HomeHeaderModule {}
