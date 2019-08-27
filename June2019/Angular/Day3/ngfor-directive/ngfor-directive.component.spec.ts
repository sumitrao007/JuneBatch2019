import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirectiveComponent } from './ngfor-directive.component';

describe('NgforDirectiveComponent', () => {
  let component: NgforDirectiveComponent;
  let fixture: ComponentFixture<NgforDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
