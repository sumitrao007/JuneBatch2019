import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterbuttonComponent } from './parameterbutton.component';

describe('ParameterbuttonComponent', () => {
  let component: ParameterbuttonComponent;
  let fixture: ComponentFixture<ParameterbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
