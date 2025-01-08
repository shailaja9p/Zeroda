import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomstylepracticeComponent } from './customstylepractice.component';

describe('CustomstylepracticeComponent', () => {
  let component: CustomstylepracticeComponent;
  let fixture: ComponentFixture<CustomstylepracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomstylepracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomstylepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
