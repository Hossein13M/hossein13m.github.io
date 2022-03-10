import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ContactFormComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule],
    exports: [ContactFormComponent],
})
export class ContactFormModule {}
