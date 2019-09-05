import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiparameterComponent } from './multiparameter.component';

describe('MultiparameterComponent', () => {
  let component: MultiparameterComponent;
  let fixture: ComponentFixture<MultiparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
