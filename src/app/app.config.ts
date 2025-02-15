import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers } from './states/app.state';
import { provideEffects } from '@ngrx/effects';
import { CityEffects } from './states/city/city.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { LandmarkEffects } from './states/landmark/landmark.effects';
import { routes } from './app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(reducers),
    provideEffects([CityEffects, LandmarkEffects]),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
    }))
  ],
};
