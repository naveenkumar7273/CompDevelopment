import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepnumberComponent } from './stepnumber.component';

describe('StepnumberComponent', () => {
  let component: StepnumberComponent;
  let fixture: ComponentFixture<StepnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
