import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CityState } from './city.reducer';

export const selectCityState = createFeatureSelector<CityState>('cities');

export const selectAllCities = createSelector(
  selectCityState,
  (state) => state.cities
);

export const selectLoading = createSelector(
  selectCityState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCityState,
  (state) => state.error
);
