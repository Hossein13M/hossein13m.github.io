import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
        data: { pageTitle: 'Home!' },
    },
    {
        path: 'contact-me',
        loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
        data: { pageTitle: 'Contact Me!' },
    },
    {
        path: 'publications',
        loadChildren: () => import('./modules/publications/publications.module').then((m) => m.PublicationsModule),
        data: { pageTitle: 'Publications!' },
    },
    {
        path: 'expertises',
        loadChildren: () => import('./modules/expertises/expertises.module').then((m) => m.ExpertisesModule),
        data: { pageTitle: 'Expertises!' },
    },
    {
        path: 'experiences',
        loadChildren: () => import('./modules/experiences/experiences.module').then((m) => m.ExperiencesModule),
        data: { pageTitle: 'Projects!' },
    },
    {
        path: 'not-found',
        loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: { pageTitle: 'You Have Been Lost!' },
    },
    {
        path: 'contact-form-submission',
        loadChildren: () => import('./modules/contact-form-submission/contact-form-submission.module').then((m) => m.ContactFormSubmissionModule),
        data: { pageTitle: 'Contact Form Submission!' },
    },
    {
        path: '**',
        data: { pageTitle: 'You Have Been Lost!' },
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
