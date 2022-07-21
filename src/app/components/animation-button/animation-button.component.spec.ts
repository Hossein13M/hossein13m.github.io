import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationButtonComponent } from './animation-button.component';

describe('AnimationButtonComponent', () => {
    let component: AnimationButtonComponent;
    let fixture: ComponentFixture<AnimationButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AnimationButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AnimationButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
