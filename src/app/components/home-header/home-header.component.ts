import { Component, Inject, InjectionToken, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderTypeEffectItems } from '../../const/home';
import Typed from 'typed.js';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
    public typed!: any;

    constructor(@Inject(PLATFORM_ID) private platformId: InjectionToken<unknown>) {}

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
}
