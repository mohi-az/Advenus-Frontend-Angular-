import { createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { City } from '../../shared/types/types';

export interface CityState {
  cities: City[];
  loading: boolean;
  error: string | null;
}

export const initialState: CityState = {
  cities: [],
  loading: false,
  error: null,
};

export const cityReducer = createReducer(
  initialState,
  on(CityActions.loadCities, (state) => ({ ...state, loading: true })),
  on(CityActions.loadCitiesSuccess, (state, { cities }) => ({ ...state, loading: false, cities })),
  on(CityActions.loadCitiesFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(CityActions.addCity, (state) => ({ ...state, loading: true })),
  on(CityActions.addCitySuccess, (state) => ({ ...state, loading: false})),
  on(CityActions.addCityFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(CityActions.updateCity, (state) => ({ ...state, loading: true })),
  on(CityActions.updateCitySuccess, (state) => ({ ...state, loading: false})),
  on(CityActions.updateCityFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(CityActions.deleteCity, (state) => ({ ...state, loading: true })),
  on(CityActions.deleteCitySuccess, (state, { cityId }) => ({ ...state, 
    // Removes the deleted city from the state
    cities: state.cities.filter(city => city.id !== cityId),
     loading: false })),
  on(CityActions.deleteCityFailure, (state, { error }) => ({ ...state, loading: false, error: error }))
);
