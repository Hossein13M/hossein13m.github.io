import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor() {}

    get windowInnerWidth(): number {
        return window.innerWidth;
    }
}
