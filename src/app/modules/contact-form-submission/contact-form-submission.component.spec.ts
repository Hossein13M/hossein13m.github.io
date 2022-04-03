import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSubmissionComponent } from './contact-form-submission.component';

describe('ContactFormSubmissionComponent', () => {
    let component: ContactFormSubmissionComponent;
    let fixture: ComponentFixture<ContactFormSubmissionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactFormSubmissionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactFormSubmissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
