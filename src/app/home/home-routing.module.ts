import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlMatchResult} from '@angular/router';
import {ModulePickerService, SelectedModule} from '../module-picker.service';
import {applicationInjector} from '../../main';

const routes: Routes = [
  {
    path: 'm1',
    loadChildren: './m1/m1.module#M1Module'
  },
  {
    path: 'm2',
    loadChildren: './m2/m2.module#M2Module'
  },
  {
    matcher: (segments, group, route): UrlMatchResult => {
      if (segments.length > 0 && segments[0].path === 'random') {
        const service: ModulePickerService = applicationInjector.get(ModulePickerService);
        const m1Resolved = service.getModule() === SelectedModule.M1;
        console.log(`M1 to resolve: ${m1Resolved}`);
        if (m1Resolved) {
          return {consumed: [segments[0]]};
        }
      }
      return null;
    },
    loadChildren: './m1/m1.module#M1Module'
  },
  {
    matcher: (segments, group, route): UrlMatchResult => {
      if (segments.length > 0 && segments[0].path === 'random') {
        const service: ModulePickerService = applicationInjector.get(ModulePickerService);
        const m2Resolved = service.getModule() === SelectedModule.M2;
        console.log(`M2 to resolve: ${m2Resolved}`);
        if (m2Resolved) {
          return {consumed: [segments[0]]};
        }
      }
      return null;
    },
    loadChildren: './m2/m2.module#M2Module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
