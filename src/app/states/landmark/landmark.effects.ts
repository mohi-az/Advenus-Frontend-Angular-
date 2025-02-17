import { HttpClient } from "@angular/common/http";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as LandmarkActions from './landmark.actions'
import { catchError, map, mergeMap, of } from "rxjs";
import { LandmarkView } from "../../shared/types/types";
import { Injectable } from "@angular/core";
@Injectable()
export class LandmarkEffects {
    private apiURL = 'http://localhost:3000/api/landmark/';
    constructor(private actions$: Actions, private http: HttpClient) { }
    landmark$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LandmarkActions.loadLandmarks),
            mergeMap(() =>
                this.http.get<LandmarkView[]>(this.apiURL).pipe(
                    map((Landmarks: LandmarkView[]) => {
                        const sss = Landmarks;
                        return LandmarkActions.loadLandmarksSuccess({ Landmarks })
                    }),
                    catchError((error) => { return of(LandmarkActions.loadLandmarksFailure({ error: error.message })) })

                )
            )
        )
    )
    Addlandmarasdsak$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LandmarkActions.addLandmarks),
            mergeMap((action) =>
                this.http.post<LandmarkView>(this.apiURL, action.Landmark).pipe(
                    map((NewLandmarks) =>
                        LandmarkActions.addLandmarksSuccess()),
                    catchError((error) => { return of(LandmarkActions.loadLandmarksFailure({ error: error.message })) })
                )
            )
        )
    )
    UpdateLandmarasdsak$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LandmarkActions.updateLandmarks),
            mergeMap((action) =>
                this.http.patch<LandmarkView>(this.apiURL + action.landmarkId, action.Landmark).pipe(
                    map((Landmarks) => LandmarkActions.updateLandmarksSuccess()
                    ),
                    catchError((error) => { return of(LandmarkActions.updateLandmarksFailure({ error: error.message })) })
                )
            )
        )
    )
    Deletelandmarasdsak$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LandmarkActions.deleteLandmarks),
            mergeMap((action) =>
                this.http.delete(this.apiURL + action.LandmarksId).pipe(
                    map(() => LandmarkActions.deleteLandmarksSuccess({ LandmarksId: action.LandmarksId })),
                    catchError((error) => { return of(LandmarkActions.loadLandmarksFailure({ error: error.message })) })

                )
            )
        )
    )

}