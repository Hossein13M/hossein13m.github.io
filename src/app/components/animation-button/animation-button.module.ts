import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationButtonComponent } from './animation-button.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AnimationButtonComponent],
    exports: [AnimationButtonComponent],
    imports: [CommonModule, MatButtonModule, RouterModule, MatIconModule],
})
export class AnimationButtonModule {}
