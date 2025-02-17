import { createAction, props } from "@ngrx/store";
import { LandmarkView } from "../../shared/types/types";

type landmarkModel = { name: string; description: string ; image_url: string | null | null; visit_duration: number | null; cityId: number,
    cityName:string,countryName:string }

export const loadLandmarks = createAction('[Landmark] Load Landmarks')
export const loadLandmarksSuccess = createAction('[Landmark] Load Landmarks success', props<{ Landmarks: LandmarkView[] }>())
export const loadLandmarksFailure = createAction('[Landmark] Load Landmarks failure', props<{ error: string }>())

export const addLandmarks = createAction('[Landmark] Add Landmarks', props<{ Landmark: landmarkModel }>())
export const addLandmarksSuccess = createAction('[Landmark] Add Landmarks success')
export const addLandmarksFailure = createAction('[Landmark] Add Landmarks failure', props<{ error: string }>())

export const updateLandmarks = createAction('[Landmark] Update Landmarks', props<{ Landmark: landmarkModel ,landmarkId:number }>())
export const updateLandmarksSuccess = createAction('[Landmark] Update Landmarks success')
export const updateLandmarksFailure = createAction('[Landmark] Update Landmarks failure', props<{ error: string }>())

export const deleteLandmarks = createAction('[Landmark] Delete Landmarks', props<{ LandmarksId: number }>())
export const deleteLandmarksSuccess = createAction('[Landmark] Delete Landmarks success', props<{ LandmarksId: number }>())
export const deleteLandmarksFailure = createAction('[Landmark] Delete Landmarks failure', props<{ error: string }>())