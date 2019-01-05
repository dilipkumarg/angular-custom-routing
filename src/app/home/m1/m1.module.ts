import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M1RoutingModule } from './m1-routing.module';
import { M1R1Component } from './m1-r1/m1-r1.component';
import { M1R2Component } from './m1-r2/m1-r2.component';

@NgModule({
  declarations: [M1R1Component, M1R2Component],
  imports: [
    CommonModule,
    M1RoutingModule
  ]
})
export class M1Module { }
