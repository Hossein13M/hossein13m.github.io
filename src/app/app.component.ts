import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { ProgressSpinner } from './components/progress-spinner/progress-spinner.model';
import { Languages } from './const/languages';
import { NavigationRoutes } from './const/navigationRoutes';
import { NavigationRouteModel } from './models/navigationRoute.model';
import { AppService } from './services/app.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isDarkTheme: boolean = true;
    public languagesList: Array<ProgressSpinner> = [];
    public screenWidth: number = this.appService.windowInnerWidth;
    public pageTitle!: string;
    public navigationRoutes: Array<NavigationRouteModel> = NavigationRoutes;

    @ViewChild('sidenav') sidenav!: MatSidenav;
    @ViewChild('infoSidenav') infoSidenav!: MatSidenav;

    constructor(private readonly router: Router, private readonly appService: AppService, @Inject(PLATFORM_ID) private platformId: unknown) {}

    @HostListener('window:resize', ['$event'])
    public onResize() {
        this.screenWidth = this.appService.windowInnerWidth;
    }

    public navigateToOtherPages(destinationRoute: string): void {
        this.router.navigate([destinationRoute]).finally(() => this.sidenav.close().finally());
    }

    ngOnInit(): void {
        this.applyChangesOnBrowserOnly(() => (this.isDarkTheme = localStorage.getItem('theme') === 'dark'));
        this.prepareLanguageListForSpinner();
        this.getCurrentRouteTitle();
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyChangesOnBrowserOnly(() => localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light'));
    }

    private applyChangesOnBrowserOnly(callback: () => void): void {
        isPlatformBrowser(!!this.platformId) && callback();
    }

    private getCurrentRouteTitle(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) this.pageTitle = NavigationRoutes.find((navItem) => navItem.routeUrl === data.url.slice(1))!.routeTitle;
        });
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
