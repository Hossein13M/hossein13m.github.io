import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label',
    template: `
        <div [class]="labelClass" class="flex items-center text-base rounded-full p-1 flex-row-reverse">
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
    @Input() labelClass: string = 'dark:bg-custom-purple-100 dark:text-custom-grey-200 bg-custom-blue-400 text-custom-yellow-500';
    @Input() labelIcon!: string;
    @Input() imageSrc!: string;

    constructor() {}
}
