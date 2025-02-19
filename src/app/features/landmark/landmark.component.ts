import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, mergeMap, switchMap } from "rxjs";
import { selectLandmarks, selectLoading } from "../../states/landmark/landmark.selectors";
import * as LandmarkActions from '../../states/landmark/landmark.actions';
import { AppState } from "@auth0/auth0-angular";
import { Store } from "@ngrx/store";
import { LandmarkView } from "../../shared/types/types";
import { HeaderComponent } from "../../shared/components/header.component";
import { NgOptimizedImage } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconService } from "../../shared/services/icon.service";


@Component({
    selector: 'app-landmark',
    templateUrl: './landmark.component.html',
    imports: [HeaderComponent, NgOptimizedImage, FontAwesomeModule]
})
export class LandmarkComponent {
    private readonly route = inject(ActivatedRoute);
    private store = inject(Store<AppState>);
    public iconService = inject(IconService);

    loading = signal<boolean>(false);
    landmarkId: string | null = null;
    landmark: LandmarkView | null = null;
    ngOnInit() {
        this.checkLoading();
        this.loadLandmark();
    }
    private checkLoading(): void {
        this.store.select(selectLoading).subscribe(isLoading => {
            this.loading.set(isLoading);
        });
    }
    private loadLandmark(): void {
        this.route.paramMap.pipe(
            switchMap(params => {
                this.landmarkId = params.get('landmarkId');
                return this.store.select(selectLandmarks);
            }),
            mergeMap(landmarks => {
                if (landmarks.length === 0) {
                    this.store.dispatch(LandmarkActions.loadLandmarks());
                    return this.store.select(selectLandmarks).pipe(
                        map(landmarks => Array.isArray(landmarks) ? landmarks : [landmarks])
                    );
                }
                return [landmarks];
            })
        ).subscribe(landmarks => {
            this.landmark = landmarks.filter(landmark => landmark.id === parseInt(this.landmarkId ?? ''))[0];
        });
    }
}