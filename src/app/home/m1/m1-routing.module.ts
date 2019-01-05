import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {M1R1Component} from './m1-r1/m1-r1.component';
import {M1R2Component} from './m1-r2/m1-r2.component';
import {applicationInjector} from '../../../main';
import {ModulePickerService} from '../../module-picker.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'r1'
  },
  {
    path: 'r1',
    component: M1R1Component
  },
  {
    path: 'r2',
    component: M1R2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M1RoutingModule {
}
