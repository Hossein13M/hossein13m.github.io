import { Component, Input, OnInit } from '@angular/core';
import { ExpertiseLevel } from '../../models/expertise.model';
import { ExpertiseClasses } from '../../const/expertises';

@Component({
    selector: 'app-level-badge',
    templateUrl: './level-badge.component.html',
    styleUrls: ['./level-badge.component.scss'],
})
export class LevelBadgeComponent implements OnInit {
    @Input() level!: ExpertiseLevel;
    public class!: string;

    constructor() {}

    ngOnInit(): void {
        this.class = ExpertiseClasses.find((expertiseClass) => expertiseClass.level === this.level)!.className;
    }
}
