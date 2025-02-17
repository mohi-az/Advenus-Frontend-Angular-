import { createAction, props } from '@ngrx/store';
import { City } from '../../shared/types/types';
type CityCreateInput = {
    id: number
    name: string
    description: string | null
    name_native: string | null
    country: string
    continent: string | null
    latitude: string | null
    longitude: string | null
    population: string | null
    founded: string | null
}
export const loadCities = createAction('[City] Load Cities');
export const loadCitiesSuccess = createAction('[City] Load Cities Success', props<{ cities: City[] }>());
export const loadCitiesFailure = createAction('[City] Load Cities Failure', props<{ error: string }>());

export const addCity = createAction('[City] Add city', props<{ cities: CityCreateInput }>());
export const addCitySuccess = createAction('[City] Add City Success')
export const addCityFailure = createAction('[City] Add City Success', props<{ error: string }>())

export const updateCity = createAction('[City] Update city', props<{ cities: Omit<CityCreateInput,'id'>,cityId:number }>());
export const updateCitySuccess = createAction('[City] Update City Success')
export const updateCityFailure = createAction('[City] Update City Success', props<{ error: string }>())

export const deleteCity = createAction('[City] Delete city', props<{ cityId: number }>());
export const deleteCitySuccess = createAction('[City] Delete City Success', props<{ cityId: number }>())
export const deleteCityFailure = createAction('[City] Delete City Success', props<{ error: string }>())
