import { Component } from '@angular/core';
import { HomeModel } from '../../models/home.model';
import { HomeTitles } from '../../const/home';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public headerFooterTitles: Array<HomeModel> = HomeTitles;

    constructor() {}
}
