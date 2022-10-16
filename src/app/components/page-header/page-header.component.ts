import { Component, Input } from '@angular/core';
import { NavigationRouteModel } from '../../models/navigationRoute.model';

@Component({
    selector: 'app-page-header',
    template: `
        <header
            class="flex items-center justify-between mb-5 p-3 sm:p-5 dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-900 text-yellow-500 "
        >
            <div class="flex items-center">
                <mat-icon class="mx-5 flex items-center text-2xl sm:text-4xl h-full min-w-min">{{ pageHeaderInfo.routeIcon }}</mat-icon>
                <h1 class="m-0 text-2xl sm:text-4xl">{{ pageHeaderInfo.routeTitle }}</h1>
            </div>
            <a href="https://twitter.com/search?q=%23mahsaAmini" target="_blank" class="flex justify-center my-0 sm:text-3xl font-bold">
                <div class="hidden sm:flex">
                    <span>Iranian Lives Matter</span>
                    <span class="text-blue-500 mx-2">#MahsaAmini</span>
                </div>
                <span class="block sm:hidden text-xl text-blue-500 font-bold">#MahsaAmini</span>
            </a>
        </header>
    `,
    styles: [
        `
            .blood-background {
                background: url('https://www.freepnglogos.com/uploads/blood-png/bloods-photos-pic-28.png') center;
                background-size: cover;
            }
        `,
    ],
})
export class PageHeaderComponent {
    @Input() pageHeaderInfo!: NavigationRouteModel;

    constructor() {}
}
