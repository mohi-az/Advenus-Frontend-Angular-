import { createAction, props } from '@ngrx/store';
import { City } from '../../shared/types/types';

export const loadCities = createAction('[City] Load Cities');
export const loadCitiesSuccess = createAction('[City] Load Cities Success', props<{ cities: City[] }>());
export const loadCitiesFailure = createAction('[City] Load Cities Failure', props<{ error: string }>());
export const deleteCity = createAction('[City] Delete city', props<{ cityId: number }>());
export const deleteCitySuccess = createAction('[City] Delete City Success', props<{ cityId: number }>())
export const deleteCityFailure = createAction('[City] Delete City Success', props<{ error: string }>())
