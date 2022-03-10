import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLinkComponent } from './contact-link.component';

describe('ContactLinkComponent', () => {
    let component: ContactLinkComponent;
    let fixture: ComponentFixture<ContactLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactLinkComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
