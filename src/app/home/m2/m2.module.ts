import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M2RoutingModule } from './m2-routing.module';
import { M2R1Component } from './m2-r1/m2-r1.component';
import { M2R2Component } from './m2-r2/m2-r2.component';

@NgModule({
  declarations: [M2R1Component, M2R2Component],
  imports: [
    CommonModule,
    M2RoutingModule
  ]
})
export class M2Module { }
