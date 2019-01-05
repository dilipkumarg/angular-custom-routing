import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {M2R2Component} from './m2-r2/m2-r2.component';
import {M2R1Component} from './m2-r1/m2-r1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'r1'
  },
  {
    path: 'r1',
    component: M2R1Component
  },
  {
    path: 'r2',
    component: M2R2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M2RoutingModule { }
