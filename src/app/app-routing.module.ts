import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
        data: { pageTitle: 'Home!' },
    },
    {
        path: 'about-me',
        loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
        data: { pageTitle: 'About Me!' },
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
        path: 'skills',
        loadChildren: () => import('./modules/skills/skills.module').then((m) => m.SkillsModule),
        data: { pageTitle: 'Skills!' },
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
