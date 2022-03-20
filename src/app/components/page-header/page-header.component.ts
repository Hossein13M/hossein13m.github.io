import { Component, Input } from '@angular/core';
import { NavigationRoutes } from '../../const/navigationRoutes';

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

    public getProperIconForHeader(headerTitle: string): string {
        return NavigationRoutes.find((route) => route.routeTitle === headerTitle)!.routeIcon;
    }
}
