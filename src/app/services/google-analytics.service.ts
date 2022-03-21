import { Injectable } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/ban-types
declare let gtag: Function;

@Injectable({
    providedIn: 'root',
})
export class GoogleAnalyticsService {
    constructor() {}

    public eventEmitter(eventName: string, eventCategory: string, eventAction: string, eventLabel: string | null = null, eventValue: number | null = null) {
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue,
        });
    }
}
