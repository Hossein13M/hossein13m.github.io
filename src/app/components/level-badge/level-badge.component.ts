import { Component, Input, OnInit } from '@angular/core';
import { SkillLevel } from '../../models/skill.model';
import { SkillClasses } from '../../const/skills';

@Component({
    selector: 'app-level-badge',
    template: ` <span [class]="class" class="rounded-3xl text-white text-xs p-2">{{ level }}</span> `,
})
export class LevelBadgeComponent implements OnInit {
    @Input() level!: SkillLevel;
    public class!: string;

    constructor() {}

    ngOnInit(): void {
        this.class = SkillClasses.find((skillClass) => skillClass.level === this.level)!.className;
    }
}
