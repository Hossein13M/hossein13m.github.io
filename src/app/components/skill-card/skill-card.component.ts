import { Component, Input, OnChanges } from '@angular/core';
import { SkillHeader, SkillModel, SkillType } from '../../models/skill.model';
import { SkillHeaders, Skills } from '../../const/skills';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnChanges {
    @Input() skillType!: SkillType;
    @Input() componentMinHeight: string = '340px';
    public header!: SkillHeader;
    public skills: Array<SkillModel> = [];

    constructor() {}

    ngOnChanges(): void {
        this.getProperSkills();
    }

    private getProperSkills(): void {
        this.skills = [];
        Skills.forEach((skill) => skill.type === this.skillType && this.skills.push(skill));
        this.header = SkillHeaders.find((skill) => skill.type === this.skillType)!;
    }
}
