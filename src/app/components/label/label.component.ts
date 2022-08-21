import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label',
    template: `
        <div [class]="labelClass" class="flex items-center text-base rounded-full p-1 flex-row-reverse cursor-default">
            <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageSrc" class="label-img" />
            <span class="px-1" [style.font-size]="fontSize">{{ labelText }}</span>
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
    @Input() labelText!: string;
    @Input() labelIcon!: string;
    @Input() imageSrc!: string;
    @Input() fontSize: string = '16px';
    @Input() labelClass: string =
        'text-xs dark:bg-custom-purple-100 dark:text-custom-grey-200 dark:hover:bg-custom-yellow-500 dark:hover:text-custom-purple-900 bg-custom-blue-400 text-custom-yellow-500 hover:bg-custom-blue-600 hover:text-white hover:font-bold dark:hover:font-bold';

    constructor() {}
}
