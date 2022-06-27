import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skills-card',
    templateUrl: './skills-card.component.html',
    styleUrls: ['./skills-card.component.scss'],
})
export class SkillsCardComponent {
    @Input() skills: Array<string> = [];
    constructor() {}
}
