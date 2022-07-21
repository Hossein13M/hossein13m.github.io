import { Component, Input } from '@angular/core';
import { NavigationRouteModel } from '../../models/navigationRoute.model';

@Component({
    selector: 'app-animation-button',
    templateUrl: './animation-button.component.html',
    styleUrls: ['./animation-button.component.scss'],
})
export class AnimationButtonComponent {
    @Input() button!: NavigationRouteModel;

    constructor() {}
}
