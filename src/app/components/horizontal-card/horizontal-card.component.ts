import { Component, Input } from '@angular/core';
import { HorizontalCardComponentType, HorizontalComponentModel } from '../../models/horizontal-component.model';

@Component({
    selector: 'app-horizontal-card',
    templateUrl: './horizontal-card.component.html',
    styleUrls: ['./horizontal-card.component.scss'],
})
export class HorizontalCardComponent {
    @Input() componentInfo!: HorizontalComponentModel;
    @Input() componentType!: HorizontalCardComponentType;

    constructor() {}
}
