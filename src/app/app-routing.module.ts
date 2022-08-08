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
        path: 'contents',
        loadChildren: () => import('./modules/contents/contents.module').then((m) => m.ContentsModule),
        data: { pageTitle: 'Publications!' },
    },
    {
        path: 'skills',
        loadChildren: () => import('./modules/skills/skills.module').then((m) => m.SkillsModule),
        data: { pageTitle: 'Skills!' },
    },
    {
        path: 'experiences',
        loadChildren: () => import('./modules/experiences/experiences.module').then((m) => m.ExperiencesModule),
        data: { pageTitle: 'Projects!' },
    },
    {
        path: 'about-me',
        loadChildren: () => import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
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
