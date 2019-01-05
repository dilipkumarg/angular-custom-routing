import {enableProdMode, Injector} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export let applicationInjector: Injector;

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((componentRef) => {
    applicationInjector = componentRef.injector;
  })
  .catch(err => console.error(err));
