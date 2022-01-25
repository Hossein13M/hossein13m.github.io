import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidenavReachMeComponent } from './info-sidenav-reach-me.component';

describe('InfoSidenavReachMeComponent', () => {
    let component: InfoSidenavReachMeComponent;
    let fixture: ComponentFixture<InfoSidenavReachMeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoSidenavReachMeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoSidenavReachMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
