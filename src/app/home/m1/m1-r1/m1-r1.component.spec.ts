import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1R1Component } from './m1-r1.component';

describe('M1R1Component', () => {
  let component: M1R1Component;
  let fixture: ComponentFixture<M1R1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1R1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1R1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
