import { Component, ViewEncapsulation } from '@angular/core';
import type { SkillHeader, SkillType } from '../../models/skill.model';
import { SkillHeaders } from '../../const/skills';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent {
    public readonly skillHeaders: Array<SkillHeader> = SkillHeaders;
    public selected: FormControl<SkillType> = this.fb.control<SkillType>('language', { nonNullable: true });

    constructor(private readonly fb: FormBuilder) {}

    public getProperNameForSelectBox(returnType: 'icon' | 'title'): string {
        return returnType === 'icon'
            ? this.skillHeaders.find((item) => item.type === this.selected.value)!.icon
            : this.skillHeaders.find((item) => item.type === this.selected.value)!.title;
    }
}
