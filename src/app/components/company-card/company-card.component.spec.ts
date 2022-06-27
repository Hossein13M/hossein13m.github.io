import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardComponent } from './company-card.component';

describe('CompanyCardComponent', () => {
    let component: CompanyCardComponent;
    let fixture: ComponentFixture<CompanyCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CompanyCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
