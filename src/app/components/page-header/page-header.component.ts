import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
    public backgroundImagePath: string = 'space11.png';
    public publicationSubject: Array<string> = ['JavaScript.', 'TypeScript.', 'Angular.', 'Git.', 'Project Management.', 'Node.JS.'];
    @Input() pageTitle!: string;

    constructor() {}
}
