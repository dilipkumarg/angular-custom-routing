import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1R2Component } from './m1-r2.component';

describe('M1R2Component', () => {
  let component: M1R2Component;
  let fixture: ComponentFixture<M1R2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1R2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1R2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
