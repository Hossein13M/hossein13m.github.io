import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
    public backgroundImagePath: string = 'space11.png';
    public pageTitle!: string;
    public publicationSubject: Array<string> = ['JavaScript.', 'TypeScript.', 'Angular.', 'Git.', 'Project Management.', 'Node.JS.'];

    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.getCurrentRouteTitle();
    }

    private getCurrentRouteTitle(): void {
        this.activatedRoute.data.subscribe((data) => (this.pageTitle = data['pageTitle']));
    }
}
