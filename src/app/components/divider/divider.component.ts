import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-divider',
    template: `
        <div class="flex justify-center items-center w-full text-4xl my-4 text-custom-yellow-500 mx-4 px-10">
            <span *ngFor="let divider of bulletPointCount" class="bullet-point dark:bg-custom-yellow-500 bg-custom-blue-200"></span>
        </div>
    `,
    styles: [
        `
            .bullet-point {
                height: 10px;
                width: 10px;
                border-radius: 10px;
                margin: 0 10px;
            }
        `,
    ],
})
export class DividerComponent {
    @Input() dividerCount: number = 3;
    public bulletPointCount: Array<number> = Array(this.dividerCount).fill(0);
}
