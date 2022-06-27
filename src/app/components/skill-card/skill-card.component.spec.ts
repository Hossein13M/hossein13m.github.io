import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardComponent } from './skill-card.component';

describe('SkillCardComponent', () => {
    let component: SkillCardComponent;
    let fixture: ComponentFixture<SkillCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SkillCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SkillCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
