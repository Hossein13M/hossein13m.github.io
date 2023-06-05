import { Component, Input } from '@angular/core';
import type { NavigationRouteModel } from '../../models/navigationRoute.model';

@Component({
    selector: 'app-page-header',
    template: `
        <header
            class="flex sm:flex-row items-center justify-between mb-5 p-3 sm:p-5 dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-900 text-yellow-500"
        >
            <div class="flex items-center justify-around">
                <mat-icon class="mx-2 flex items-center text-2xl sm:text-4xl h-full min-w-min">{{ pageHeaderInfo.routeIcon }}</mat-icon>
                <h1 class="m-0 text-2xl font-bold sm:font-normal sm:text-4xl">{{ pageHeaderInfo.routeTitle }}</h1>
            </div>
        </header>
    `,
})
export class PageHeaderComponent {
    @Input() pageHeaderInfo!: NavigationRouteModel;

    constructor() {}
}
