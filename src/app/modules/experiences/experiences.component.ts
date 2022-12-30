import { Component } from '@angular/core';
import type { JobPositionModel } from '../../models/experience.model';
import { Experiences } from '../../const/experiences';

@Component({
    selector: 'app-experiences',
    template: `
        <div *ngFor="let job of jobs" class="grid grid-cols-1 py-3 my-2">
            <app-experience-card class="xp-card" [job]="job"></app-experience-card>
        </div>
    `,
})
export class ExperiencesComponent {
    public jobs: Array<JobPositionModel> = Experiences;
    constructor() {}
}
