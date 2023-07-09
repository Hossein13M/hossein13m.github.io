import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpBtnComponent } from './adp-btn.component';

describe('AdpBtnComponent', () => {
    let component: AdpBtnComponent;
    let fixture: ComponentFixture<AdpBtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdpBtnComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AdpBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
