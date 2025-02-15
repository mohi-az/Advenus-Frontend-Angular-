import { HttpClient } from "@angular/common/http";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as LandmarkActions from './landmark.actions'
import { catchError, map, mergeMap, of } from "rxjs";
import { Landmark } from "../../shared/types/types";
import { Injectable } from "@angular/core";
@Injectable()
export class LandmarkEffects {

    private apiURL = 'http://localhost:3000/api/landmark/';
    constructor(private actions$: Actions, private http: HttpClient) { }
    landmark$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LandmarkActions.loadLandmarks),
            mergeMap(() =>
                this.http.get<Landmark[]>(this.apiURL).pipe(
                    map((Landmarks: Landmark[]) => LandmarkActions.loadLandmarksSuccess({ Landmarks })),
                    catchError((error) => { return of(LandmarkActions.loadLandmarksFailure({ error:error.message})) })

                )
            )
        )
    )
}