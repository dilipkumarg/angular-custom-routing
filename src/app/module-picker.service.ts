import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulePickerService {

  private module = SelectedModule.M2;

  constructor() {
  }

  public setModule(module: SelectedModule) {
    console.log(`Setting module to : ${module}`);
    this.module = module;
  }

  public getModule(): SelectedModule {
    return this.module;
  }
}

export enum SelectedModule {
  M1 = 'M1',
  M2 = 'M2'
}
