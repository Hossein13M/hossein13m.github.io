import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormSubmissionComponent } from './contact-form-submission.component';

const routes: Routes = [{ path: '', component: ContactFormSubmissionComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactFormSubmissionRoutingModule {}
