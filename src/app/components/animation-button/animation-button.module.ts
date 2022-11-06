import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimationButtonComponent } from './animation-button.component';

@NgModule({
    declarations: [AnimationButtonComponent],
    exports: [AnimationButtonComponent],
    imports: [CommonModule, MatButtonModule, RouterModule, MatIconModule],
})
export class AnimationButtonModule {}
