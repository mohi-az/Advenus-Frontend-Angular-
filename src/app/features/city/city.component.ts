import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { AppState } from "../../states/app.state";
import { Store } from "@ngrx/store";
import { selectAllCities, selectLoading } from "../../states/city/city.selectors";
import { City, LandmarkView } from "../../shared/types/types";
import { map, mergeMap, switchMap } from "rxjs";
import * as CityAction from '../../states/city/city.actions';
import * as LandmarkActions from '../../states/landmark/landmark.actions';
import { selectLandmarks } from "../../states/landmark/landmark.selectors";
import { NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from "../../shared/components/header.component";
import { MapComponent } from "../../shared/components/map.component";
import { GalleryComponent } from "../../shared/components/gallery.component";

@Component({
    templateUrl: './city.component.html',
    selector: 'app-city',
    imports: [NgOptimizedImage, HeaderComponent, MapComponent, GalleryComponent]
})
export class CityComponent {
    private readonly route = inject(ActivatedRoute);
    private store = inject(Store<AppState>);
    loading = signal<boolean>(false);
    city :City | null=null;
    landmarks :LandmarkView[] | null=null;
    cityName: string | null = null;
    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => {
                this.cityName = params.get('city');
                return this.store.select(selectAllCities);
            }),
            mergeMap(cities => {
                if (cities.length === 0) {
                    this.store.dispatch(CityAction.loadCities());
                }
                const city = cities.find(city => city.name.toLocaleLowerCase() === this.cityName);
                this.city =(city ?? null);
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
            this.landmarks=landmarks.filter(landmark => landmark.cityId === this.city?.id);
        });
        this.store.select(selectLoading).subscribe(isLoading => {
            this.loading.set(isLoading);
        });
    }
}