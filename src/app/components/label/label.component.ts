import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label',
    template: `
        <div [class]="labelClass" class="flex items-center text-base">
            <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageSrc" class="label-img" />
            <span class="px-1">{{ labelText }}</span>
            <mat-icon *ngIf="!!labelIcon" inline>{{ labelIcon }}</mat-icon>
        </div>
    `,
    styles: [
        `
            .label-img {
                max-height: 40px;
            }
        `,
    ],
})
export class LabelComponent {
    @Input() labelText: string = 'March 2020 - April 2021';
    @Input() labelClass: string = 'rounded-full p-1 bg-custom-purple-100 text-custom-grey-200 flex-row-reverse';
    @Input() labelIcon!: string;
    @Input() imageSrc!: string;

    constructor() {}
}
