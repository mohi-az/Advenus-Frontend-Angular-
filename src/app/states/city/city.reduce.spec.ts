import { cityReducer, initialState } from './city.reducer';
import * as CityActions from './city.actions';
import { City } from '../../shared/types/types';

describe('City Reducer', () => {
  // Mock city data for testing
  let cityData: City[] = [
    {
      id: 1, name: 'Munich', latitude: "23.55", longitude: "35.42",
      country: "Germany", description: "Germany", population: "12000000", name_native: "",
      climate: "warm", continent: "Europe", founded: "2000", isDeleted: false, timezone: null, landmarks: [
        {
          id: 30,
          name: "Marienplatz",
          description: "Marienplatz is the heart of Munich",
          image_url: "f8e23x.jpg",
          cityId: 10,
          isDeleted: false,
          categories: null
        }]
    },
    {
      id: 2, name: 'Berlin', latitude: "52.52", longitude: "13.40",
      country: "Germany", description: "Capital", population: "3600000", name_native: "",
      climate: "moderate", continent: "Europe", founded: "1237", isDeleted: true, timezone: null, landmarks: [
        {
          id: 30,
          name: "Marienplatz",
          description: "Marienplatz is the heart of Munich",
          image_url: "f8e23x.jpg",
          cityId: 10,
          isDeleted: false,
          categories: null
        }]
    }
  ]

  it('should return the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN' } as any;
    const state = cityReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  // Test for loadCitiesSuccess action - should update state with cities
  it('should update state correctly when a CityLoadSuccess action is dispatched', () => {
    const action = CityActions.loadCitiesSuccess({ cities: cityData });
    const state = cityReducer(initialState, action);
    expect(state.cities).toEqual(cityData);
  });

  // Test for loadCitiesFailure action - should update state with error
  it('should update state with error when CityLoadFailure action is dispatched', () => {
    const mockError = 'Failed to load cities';
    const action = CityActions.loadCitiesFailure({ error: mockError });
    const state = cityReducer(initialState, action);
    expect(state.error).toEqual(mockError);
    expect(state.loading).toBe(false);
  });

  // Test for loadCities action - should set loading to true
  it('should set loading to true when CityLoadStart action is dispatched', () => {
    const action = CityActions.loadCities();
    const state = cityReducer(initialState, action);
    expect(state.loading).toBe(true);
  });
});

