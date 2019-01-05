import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2R2Component } from './m2-r2.component';

describe('M2R2Component', () => {
  let component: M2R2Component;
  let fixture: ComponentFixture<M2R2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2R2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2R2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
