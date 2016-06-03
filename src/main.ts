import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MainComponent);

