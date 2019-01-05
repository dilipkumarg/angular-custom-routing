import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2R1Component } from './m2-r1.component';

describe('M2R1Component', () => {
  let component: M2R1Component;
  let fixture: ComponentFixture<M2R1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2R1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2R1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
