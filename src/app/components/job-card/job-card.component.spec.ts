import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardComponent } from './job-card.component';

describe('JobCardComponent', () => {
    let component: JobCardComponent;
    let fixture: ComponentFixture<JobCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [JobCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JobCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
