import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProgressSpinner } from './components/progress-spinner/progress-spinner.model';
import { ActivationStart, Router } from '@angular/router';
import { Languages } from './const/languages';
import { NavigationRoutes } from './const/navigationRoutes';
import { NavigationRouteModel } from './models/navigationRoute.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isDarkTheme: boolean = true;
    public languagesList: Array<ProgressSpinner> = [];
    public screenWidth: number = window.innerWidth;
    public pageTitle!: string;
    public navigationRoutes: Array<NavigationRouteModel> = NavigationRoutes;
    @ViewChild('sidenav') sidenav!: MatSidenav;
    @ViewChild('infoSidenav') infoSidenav!: MatSidenav;

    constructor(private readonly router: Router) {}

    @HostListener('window:resize', ['$event'])
    public onResize() {
        this.screenWidth = window.innerWidth;
    }

    public navigateToOtherPages(destinationRoute: string): void {
        this.router.navigate([destinationRoute]).finally(() => this.sidenav.close().finally());
    }

    ngOnInit(): void {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
        this.prepareLanguageListForSpinner();
        this.getCurrentRouteTitle();
    }

    private getCurrentRouteTitle(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof ActivationStart) this.pageTitle = data.snapshot.data['pageTitle'];
        });
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }

    private prepareLanguageListForSpinner(): void {
        Languages.map((language) => {
            this.languagesList.push({
                tailwindsClass: 'text-red-500',
                progressValue: language.proficiencyPercent,
                insideText: language.proficiencyWithinText,
                labelText: language.name,
                bottomMargin: '35px',
                spinnerDiameter: 50,
            });
        });
    }
}
