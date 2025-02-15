import { ActionReducerMap } from '@ngrx/store';
import { cityReducer, CityState } from './city/city.reducer';
import { landmarkReducer, LandmarkState } from './landmark/landmark.reducer';

export interface AppState {
  cities: CityState;
  landmarks: LandmarkState;
}

export const reducers: ActionReducerMap<AppState> = {
  cities: cityReducer,
  landmarks: landmarkReducer
};
