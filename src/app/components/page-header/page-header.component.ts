import { Component, Input } from '@angular/core';
import { NavigationRouteModel } from '../../models/navigationRoute.model';

@Component({
    selector: 'app-page-header',
    template: `
        <header
            class="flex items-center justify-between mb-5 p-3 sm:p-5 dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-900 text-yellow-500 "
        >
            <div class="flex items-center">
                <mat-icon class="mx-2 flex items-center text-2xl sm:text-4xl h-full min-w-min">{{ pageHeaderInfo.routeIcon }}</mat-icon>
                <h1 class="m-0 text-xl sm:text-4xl">{{ pageHeaderInfo.routeTitle }}</h1>
            </div>
            <div class="flex justify-center my-0 sm:text-3xl font-bold sm:mr-5 mr-4">
                <div class="hidden sm:flex mx-2">
                    <span>Iranian Lives Matter</span>
                </div>
                <a href="https://twitter.com/search?q=%23mahsaAmini" target="_blank">
                    <span class="text-xl sm:text-3xl text-blue-500 font-bold">#MahsaAmini</span>
                </a>
            </div>
        </header>
    `,
})
export class PageHeaderComponent {
    @Input() pageHeaderInfo!: NavigationRouteModel;

    constructor() {}
}
