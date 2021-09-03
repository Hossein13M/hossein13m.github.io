import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appProgressSpinner]',
})
export class ProgressSpinnerDirective implements AfterViewChecked {
    @Input() color!: string;

    constructor(private elem: ElementRef) {}

    ngAfterViewChecked() {
        const element = this.elem.nativeElement as HTMLElement;
        const circle = element.querySelector('circle');
        circle!.style.stroke = this.color;
    }
}
