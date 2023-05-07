import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';

@NgModule({
    declarations: [LanguageComponent],
    imports: [CommonModule],
    exports: [LanguageComponent],
})
export class LanguageModule {}
