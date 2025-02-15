import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { LandmarkState } from "./landmark.reducer";

export const selectLandmarksState = createFeatureSelector<LandmarkState>('landmarks')

export const selectLandmarks = createSelector(
    selectLandmarksState,
    (state) => state.landmarks
)
export const selectLoading = createSelector(
    selectLandmarksState,
    (state) => state.loading
)
export const selectError = createSelector(
    selectLandmarksState,
    (state) => state.error
)

