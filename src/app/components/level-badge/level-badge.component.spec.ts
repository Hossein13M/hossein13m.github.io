import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBadgeComponent } from './level-badge.component';

describe('LevelBadgeComponent', () => {
    let component: LevelBadgeComponent;
    let fixture: ComponentFixture<LevelBadgeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LevelBadgeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LevelBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
