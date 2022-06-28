import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-job-skill-card',
    templateUrl: './job-skill-card.component.html',
    styleUrls: ['./job-skill-card.component.scss'],
})
export class JobSkillCardComponent {
    @Input() skills: Array<string> = [];
    constructor() {}
}
