import { Component } from '@angular/core';
import { BaseInfo } from '../../const/baseInfo';

@Component({
    selector: 'app-base-info',
    templateUrl: './base-info.component.html',
    styleUrls: ['./base-info.component.scss'],
})
export class BaseInfoComponent {
    public baseInfo: Array<{ subject: string; answer: string }> = BaseInfo;

    constructor() {}
}
