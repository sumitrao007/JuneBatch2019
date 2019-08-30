import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBuiltinComponent } from './pipe-builtin.component';

describe('PipeBuiltinComponent', () => {
  let component: PipeBuiltinComponent;
  let fixture: ComponentFixture<PipeBuiltinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeBuiltinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBuiltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
