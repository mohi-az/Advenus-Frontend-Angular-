import { createReducer, on } from "@ngrx/store";
import { LandmarkView } from "../../shared/types/types";
import * as LandmarkActions from './landmark.actions'
export interface LandmarkState {
    landmarks: LandmarkView[],
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
    on(LandmarkActions.loadLandmarksSuccess, (state, { Landmarks }) => ({ ...state, landmarks:Landmarks,loading:false })),
    on(LandmarkActions.loadLandmarksFailure, (state, { error }) => ({ ...state, error: error, loading: false })),

    on(LandmarkActions.addLandmarks, (state) => ({ ...state, loading: true })),
    on(LandmarkActions.addLandmarksSuccess, (state) => ({ ...state, loading: false })),
    on(LandmarkActions.addLandmarksFailure, (state, { error }) => ({ ...state, error: error, loading: false })),

    on(LandmarkActions.updateLandmarks, (state) => ({ ...state, loading: true })),
    on(LandmarkActions.updateLandmarksSuccess, (state) => ({ ...state, loading: false })),
    on(LandmarkActions.updateLandmarksFailure, (state, { error }) => ({ ...state, error: error, loading: false })),

    on(LandmarkActions.deleteLandmarks, (state) => ({ ...state, loading: true })),
    on(LandmarkActions.deleteLandmarksSuccess, (state, {  LandmarksId }) => ({ ...state, landmarks: state.landmarks.filter(l => l.id !== LandmarksId), loading: false })),
    on(LandmarkActions.deleteLandmarksFailure, (state, { error }) => ({ ...state, error: error, loading: false })),
)