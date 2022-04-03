import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormSubmissionComponent } from './contact-form-submission.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { ContactFormSubmissionRoutingModule } from './contact-form-submission.routing.module';

@NgModule({
    declarations: [ContactFormSubmissionComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, RouterModule, ContactFormSubmissionRoutingModule],
})
export class ContactFormSubmissionModule {}
