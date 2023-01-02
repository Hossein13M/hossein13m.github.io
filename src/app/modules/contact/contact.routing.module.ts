import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), TranslocoModule],
    providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'contact' }],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
