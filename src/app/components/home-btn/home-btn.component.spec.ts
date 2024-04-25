import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBtnComponent } from './home-btn.component';

describe('AdpBtnComponent', () => {
    let component: HomeBtnComponent;
    let fixture: ComponentFixture<HomeBtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeBtnComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
