import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindReaderComponent } from './mind-reader.component';

describe('MindReaderComponent', () => {
  let component: MindReaderComponent;
  let fixture: ComponentFixture<MindReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
