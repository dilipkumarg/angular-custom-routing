import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes, UrlMatchResult, UrlSegment, UrlSegmentGroup} from '@angular/router';
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
    matcher: m1Matcher,
    loadChildren: './m1/m1.module#M1Module'
  },
  {
    matcher: m2Matcher,
    loadChildren: './m2/m2.module#M2Module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}

export function m1Matcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {
  return moduleMatcher(SelectedModule.M1, segments);
}

export function m2Matcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {
  return moduleMatcher(SelectedModule.M2, segments);
}

export function moduleMatcher(module: SelectedModule, segments: UrlSegment[]) {
  if (segments.length > 0 && segments[0].path === 'random') {
    const service: ModulePickerService = applicationInjector.get(ModulePickerService);
    const moduleResolved = service.getModule() === module;
    console.log(`${module} to resolve: ${moduleResolved}`);
    if (moduleResolved) {
      return {consumed: [segments[0]]};
    }
  }
  return null;
}
