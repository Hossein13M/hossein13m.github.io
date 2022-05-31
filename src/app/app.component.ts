import { AfterViewInit, Component, HostListener, Inject, InjectionToken, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ProgressSpinner } from './components/progress-spinner/progress-spinner.model';
import { Languages } from './const/languages';
import { NavigationRoutes } from './const/navigationRoutes';
import { NavigationRouteModel } from './models/navigationRoute.model';
import { AppService } from './services/app.service';
import { isPlatformBrowser } from '@angular/common';

// eslint-disable-next-line @typescript-eslint/ban-types
declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    public isDarkTheme: boolean = true;
    public languagesList: Array<ProgressSpinner> = [];
    public screenWidth: number = this.appService.windowInnerWidth;
    public headerInfo: NavigationRouteModel = { routeTitle: 'Home!', routeUrl: '', routeIcon: 'home' };
    public navigationRoutes: Array<NavigationRouteModel> = NavigationRoutes;
    public loading: boolean = false;
    public preloading: boolean = true;

    @ViewChild('sidenav') sidenav!: MatSidenav;
    @ViewChild('infoSidenav') infoSidenav!: MatSidenav;

    constructor(private readonly router: Router, private readonly appService: AppService, @Inject(PLATFORM_ID) private platformId: InjectionToken<unknown>) {
        this.applyChangesOnBrowserOnly(() => this.checkNavigationEvent());
    }

    @HostListener('window:resize', ['$event'])
    public onResize() {
        this.screenWidth = this.appService.windowInnerWidth;
    }

    ngOnInit(): void {
        this.applyChangesOnBrowserOnly(() => this.getThemeFromLocalStorage());
        this.prepareLanguageListForSpinner();
        this.getCurrentRouteTitle();
    }

    ngAfterViewInit() {
        this.preloading = false;
    }

    private checkNavigationEvent(): void {
        this.router.events.subscribe((event) => {
            event instanceof NavigationEnd && gtag('config', 'xx-xxxxx-xx', { page_path: event.urlAfterRedirects });
            this.checkForLoadingBar(event);
        });
    }

    private getThemeFromLocalStorage(): void {
        localStorage.getItem('theme') ? (this.isDarkTheme = localStorage.getItem('theme') === 'dark') : (this.isDarkTheme = true);
    }

    public navigateToOtherPages(destinationRoute: string): void {
        this.router.navigate([destinationRoute]).finally(() => this.sidenav.close().finally());
    }
    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyChangesOnBrowserOnly(() => localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light'));
    }

    private applyChangesOnBrowserOnly(callback: () => void): void {
        isPlatformBrowser(this.platformId) && callback();
    }

    private getCurrentRouteTitle(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) {
                this.headerInfo = NavigationRoutes.find((navItem) => navItem.routeUrl === data.url.slice(1)) ?? this.getProperNavigationRoute();
            }
        });
    }

    private getProperNavigationRoute(): NavigationRouteModel {
        return this.router.url === '/contact-form-submission'
            ? { routeTitle: 'Contact Form Submitted!', routeUrl: 'contact-form-submission', routeIcon: 'done' }
            : { routeTitle: 'You Have Been Lost!', routeUrl: 'not-found', routeIcon: 'fmd_bad' };
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

    private checkForLoadingBar(event: any): void {
        switch (true) {
            case event instanceof NavigationStart: {
                this.loading = true;
                break;
            }

            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
                this.loading = false;
                break;
            }
            default: {
                break;
            }
        }
    }
}
