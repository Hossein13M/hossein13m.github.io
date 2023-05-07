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
            <div class="flex items-center justify-center my-0 sm:text-3xl font-bold mt-2 sm:mt-0 sm:mr-5">
                <a
                    href="https://twitter.com/search?q=%23mahsaAmini"
                    class="hidden sm:flex text-xl sm:text-3xl dark:text-custom-purple-500 font-black"
                    target="_blank"
                >
                    <span class="dastan">#WomanLifeFreedom</span>
                    <img src="../../../assets/images/womanLifeFreedom.png" alt="" width="40" class="ml-2" />
                </a>
                <a class="block sm:hidden" href="https://twitter.com/search?q=%23mahsaAmini">
                    <img src="../../../assets/images/womanLifeFreedom.png" alt="" width="40" />
                </a>
            </div>
        </header>
    `,
})
export class PageHeaderComponent {
    @Input() pageHeaderInfo!: NavigationRouteModel;

    constructor() {}
}
