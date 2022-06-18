import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label',
    template: `
        <div [class]="labelClass" class="p-2 flex items-center text-base">
            <span class="px-1">{{ labelText }}</span>
            <mat-icon *ngIf="!!labelIcon" inline>{{ labelIcon }}</mat-icon>
        </div>
    `,
})
export class LabelComponent {
    @Input() labelText: string = 'March 2020 - April 2021';
    @Input() labelClass: string = 'rounded-full bg-custom-blue-400 text-custom-grey-200 flex-row-reverse';
    @Input() labelIcon: string | null = 'settings';

    constructor() {}
}
