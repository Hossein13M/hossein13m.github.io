import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './contact.component';
import { ContactFormModule } from '../../components/contact-form/contact-form.module';
import { ContactLinkModule } from '../../components/contact-link/contact-link.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { ContactRoutingModule } from './contact.routing.module';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        ContactRoutingModule,
        CommonModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        ContactFormModule,
        ContactLinkModule,
        TranslocoModule,
    ],
    providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'contact' }],
})
export class ContactModule {}
