import { Component } from '@angular/core';
import { SkillHeader, SkillType } from '../../models/skill.model';
import { ExpertiseHeaders } from '../../const/skills';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
    public readonly expertiseHeaders: Array<SkillHeader> = ExpertiseHeaders;
    public selected: FormControl<SkillType> = this.fb.control<SkillType>('language', { nonNullable: true });

    constructor(private readonly fb: FormBuilder) {}

    public getProperNameForSelectBox(returnType: 'icon' | 'title'): string {
        return returnType === 'icon'
            ? this.expertiseHeaders.find((item) => item.type === this.selected.value)!.icon
            : this.expertiseHeaders.find((item) => item.type === this.selected.value)!.title;
    }
}
