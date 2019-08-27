import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefVariableComponent } from './templateref-variable.component';

describe('TemplaterefVariableComponent', () => {
  let component: TemplaterefVariableComponent;
  let fixture: ComponentFixture<TemplaterefVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplaterefVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
