import { Component } from '@angular/core';
import type { HomeModel } from '../../models/home.model';
import { HomeTitles } from '../../const/home';

@Component({
    selector: 'app-home',
    template: `
        <app-home-header></app-home-header>

        <div class="text-custom-yellow-500 mt-4 sm:mt-8">
            <section class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-1">
                <div class="flex" *ngFor="let headerItem of homeTitles">
                    <h1 class="dark:text-custom-yellow-500 text-custom-blue-400 mr-2">{{ headerItem.title }}</h1>
                    <h1 class="dark:text-custom-grey-500 text-custom-grey-900">{{ headerItem.subtitle }}</h1>
                </div>
            </section>
        </div>
    `,
})
export class HomeComponent {
    public homeTitles: Array<HomeModel> = HomeTitles;

    constructor() {}
}
