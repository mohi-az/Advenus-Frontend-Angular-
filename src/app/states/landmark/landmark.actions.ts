import { createAction, props } from "@ngrx/store";
import { Landmark } from "../../shared/types/types";
export const loadLandmarks = createAction('[Landmark] Load Landmarks')
export const loadLandmarksSuccess = createAction('[Landmark] Load Landmarks success', props<{ Landmarks: Landmark[] }>())
export const loadLandmarksFailure = createAction('[Landmark] Load Landmarks failure', props<{ error: string }>())