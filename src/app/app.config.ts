import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // aprovideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection(),
  ],
};
