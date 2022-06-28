import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSkillCardComponent } from './job-skill-card.component';

describe('JobSkillCardComponent', () => {
    let component: JobSkillCardComponent;
    let fixture: ComponentFixture<JobSkillCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [JobSkillCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JobSkillCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
