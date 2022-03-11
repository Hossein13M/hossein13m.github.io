import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseCardComponent } from './expertise-card.component';

describe('ExpertiseCardComponent', () => {
    let component: ExpertiseCardComponent;
    let fixture: ComponentFixture<ExpertiseCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpertiseCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpertiseCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
