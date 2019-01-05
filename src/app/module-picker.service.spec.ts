import { TestBed } from '@angular/core/testing';

import { ModulePickerService } from './module-picker.service';

describe('ModulePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModulePickerService = TestBed.get(ModulePickerService);
    expect(service).toBeTruthy();
  });
});
