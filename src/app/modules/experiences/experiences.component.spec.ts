import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';

describe('ProjectsComponent', () => {
    let component: ExperiencesComponent;
    let fixture: ComponentFixture<ExperiencesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExperiencesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExperiencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
