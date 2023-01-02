import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactFormComponent } from './contact-form.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    declarations: [ContactFormComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule, TranslocoModule],
    exports: [ContactFormComponent],
})
export class ContactFormModule {}
