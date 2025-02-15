import { createReducer, on } from "@ngrx/store";
import { Landmark } from "../../shared/types/types";
import * as LandmarkActions from './landmark.actions'
export interface LandmarkState {
    landmarks: Landmark[],
    loading: boolean,
    error: string | null;
}
const initialValues: LandmarkState = {
    landmarks: [],
    error: null,
    loading: false
}

export const landmarkReducer = createReducer(
    initialValues,
    on(LandmarkActions.loadLandmarks, (state) => ({ ...state, loading: true })),
    on(LandmarkActions.loadLandmarksSuccess, (state, { Landmarks }) => ({ ...state, landmarks: Landmarks })),
    on(LandmarkActions.loadLandmarksFailure, (state, { error }) => ({ ...state, error: error }))
)