import { landmarkReducer,initialValues } from './landmark.reducer';
import * as LandmarkActions from './landmark.actions';
import { LandmarkView } from '../../shared/types/types';

describe('Landmark Reducer', () => {
  // Mock landmark data for testing
    let landMarkData: LandmarkView[] = [
         {
             id: 30,
             name: "Marienplatz",
             description: null,
             imageURL: "munich-marienplatz.jpg",
             visitDuration: 30,
             cityName: "Munich",
             cityId: 10,
             countryName: "Germany",
             categories: []
         },
         {
             id: 29,
             name: "Schloss Nymphenburg",
             description: null,
             imageURL: "Schloss-Nymphenburg-Muenchen.jpeg",
             visitDuration: 90,
             cityName: "Munich",
             cityId: 10,
             countryName: "Germany",
             categories: []
         }]
  it('should return the initial state when an unknown landmark is dispatched', () => {
    const action = { type: 'UNKNOWN' } as any;
    const state = landmarkReducer(initialValues, action);
    expect(state).toEqual(initialValues);
  });

  // Test for loadLandmarksSuccess action - should update state with landmarks
  it('should update state correctly when a loadLandmarksSuccess action is dispatched', () => {
    const action = LandmarkActions.loadLandmarksSuccess({ Landmarks: landMarkData });
    const state = landmarkReducer(initialValues, action);
    expect(state.landmarks).toEqual(landMarkData);
  });

  // Test for loadLandmarksFailure action - should update state with error
  it('should update state with error when loadLandmarksFailure action is dispatched', () => {
    const mockError = 'Failed to load landmarks';
    const action = LandmarkActions.loadLandmarksFailure({ error: mockError });
    const state = landmarkReducer(initialValues, action);
    expect(state.error).toEqual(mockError);
    expect(state.loading).toBe(false);
  });

  // Test for loadLandmarks action - should set loading to true
  it('should set loading to true when loadLandmarks action is dispatched', () => {
    const action = LandmarkActions.loadLandmarks();
    const state = landmarkReducer(initialValues, action);
    expect(state.loading).toBe(true);
  });
});

