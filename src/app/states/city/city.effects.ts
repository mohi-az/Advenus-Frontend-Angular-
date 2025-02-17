import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CityActions from './city.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '../../shared/types/types';

@Injectable()
export class CityEffects {
  private apiURL = 'http://localhost:3000/api/city/';
  constructor(private actions$: Actions, private http: HttpClient) {
    console.log('CityEffects Initialized');
  }
  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.loadCities),
      mergeMap(() =>
        this.http.get<City[]>(this.apiURL).pipe(
          map(cities => CityActions.loadCitiesSuccess({ cities })),
          catchError(error => of(CityActions.loadCitiesFailure({ error })))
        )
      )
    )

  );
  addCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.addCity),
      mergeMap((action) =>
        this.http.post(this.apiURL, action.cities).pipe(
          map(result => CityActions.addCitySuccess()),
          catchError(error => of(CityActions.addCityFailure({ error })))
        )

      )
    ));
  updateCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.updateCity),
      mergeMap((action) =>
        this.http.patch(this.apiURL + action.cityId, action.cities).pipe(
          map(result => CityActions.updateCitySuccess()),
          catchError(error => of(CityActions.updateCityFailure(error)))
        )
      )
    )
  )
  deleteCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.deleteCity),
      mergeMap(({ cityId }) =>
        this.http.delete<City>(this.apiURL + cityId).pipe(
          map(() => CityActions.deleteCitySuccess({ cityId })),
          catchError(error => {
            return of(CityActions.deleteCityFailure({ error: error.message }))
          })
        )
      )
    )
  )
}