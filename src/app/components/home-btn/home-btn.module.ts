import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HomeBtnComponent } from './home-btn.component';

@NgModule({
    declarations: [HomeBtnComponent],
    exports: [HomeBtnComponent],
    imports: [CommonModule, MatButtonModule],
})
export class HomeBtnModule {}
