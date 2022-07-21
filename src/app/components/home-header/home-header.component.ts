import { AfterViewInit, Component, Inject, InjectionToken, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';
import { HeaderTypeEffectItems } from '../../const/home';
import { NavigationRouteModel } from '../../models/navigationRoute.model';
import { NavigationRoutes } from '../../const/navigationRoutes';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    public typed!: any;
    public buttons: Array<NavigationRouteModel> = NavigationRoutes.filter((item) => item.routeTitle !== 'Home!');
    public selectedButton: NavigationRouteModel = this.buttons[0];
    private intervalId!: ReturnType<typeof setInterval>;

    constructor(@Inject(PLATFORM_ID) private platformId: InjectionToken<unknown>) {}

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    ngAfterViewInit(): void {
        this.intervalId = setInterval(() => this.changeButtonText(), 2000);
    }

    ngOnInit(): void {
        const options = {
            strings: HeaderTypeEffectItems,
            typeSpeed: 30,
            backSpeed: 60,
            showCursor: true,
            cursorChar: '|',
            loop: true,
        };

        isPlatformBrowser(this.platformId) && new Typed('#text', options);
    }

    public changeButtonText(): void {
        this.selectedButton = this.buttons[Math.floor(Math.random() * 4)];
    }
}
