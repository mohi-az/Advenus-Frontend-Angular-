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
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAuth0 } from '@auth0/auth0-angular';

import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(reducers),
    provideEffects([CityEffects, LandmarkEffects]),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
    })),
    provideAnimations(), // required animations providers
    provideToastr({progressBar:true,preventDuplicates:true}), // Toastr providers
    provideAuth0({
      domain: 'dev-of8ib677cr8jpj8e.eu.auth0.com',
      clientId: 'p12f3KdIMp5NZ2HBovGaptwNAMRsUs9V',
      authorizationParams: {
        redirect_uri: window.location.origin + '/auth/callback'
      }
    })
  ],
};
