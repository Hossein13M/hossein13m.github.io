import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appProgressSpinner]',
})
export class ProgressSpinnerDirective implements AfterViewChecked {
    @Input() color!: string;

    constructor(private readonly elementRef: ElementRef) {}

    public ngAfterViewChecked(): void {
        const element = this.elementRef.nativeElement as HTMLElement;
        const circle = element.querySelector('circle');
        circle!.style.stroke = this.color;
    }
}
