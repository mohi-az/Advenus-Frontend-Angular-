import { Component, inject } from "@angular/core";
import { selectAllCities, selectLoading } from "../../../states/city/city.selectors";
import * as CityActions from '../../../states/city/city.actions'
import { AppState } from "../../../states/app.state";
import { Store } from "@ngrx/store";
import { mergeMap } from "rxjs";
import { City, LandmarkView } from "../../../shared/types/types";
import { selectLandmarks, selectLoading as landmarkselectLoading } from "../../../states/landmark/landmark.selectors";
import * as LandmarkActions from '../../../states/landmark/landmark.actions'
import { IconService } from "../../../shared/services/icon.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MapComponent } from "../../../shared/components/map.component";

@Component({
    templateUrl: './dashboard.component.html',
    selector: 'admin-dashboard',
    imports: [FontAwesomeModule, MapComponent]
})

export class AdminDashboardComponent {
    iconService = inject(IconService);
    private store = inject(Store<AppState>);
    loadingCity = false;
    loadingLandmark = false;
    cities: City[] = []
    cityCoordinates: { lat: number; lng: number, title: string }[] = []; // Coordinates for cities on the map
    landmarks: LandmarkView[] = []

     // Load initial data for cities and landmarks to show  dashboard metrics
    ngOnInit() {
        this.loadCities();
        this.store.select(selectLoading).subscribe(isLoading => {
            this.loadingCity = isLoading;
        });
        this.loadLandmarks();
        this.store.select(landmarkselectLoading).subscribe(isLoading => {
            this.loadingLandmark = isLoading;
        });
    }
    private loadCities(): void {
        this.store.select(selectAllCities).pipe(
            mergeMap(cities => {
                if (cities.length) return [cities];
                this.store.dispatch(CityActions.loadCities());
                return this.store.select(selectAllCities);
            })
        ).subscribe(cities => {
            this.cities = cities;
            this.cityCoordinates = cities
                .filter(city => city.latitude && city.longitude)
                .map(city => ({
                    lat: parseFloat(city.latitude),
                    lng: parseFloat(city.longitude),
                    title: city.name
                }));
        });
    }
    private loadLandmarks(): void {
        this.store.select(selectLandmarks).pipe(
            mergeMap(result => {
                if (result.length > 0) return [result]
                else {
                    this.store.dispatch(LandmarkActions.loadLandmarks())
                    return this.store.select(selectLandmarks)
                }
            }
            )
        ).subscribe(landmarks => {
            this.landmarks = landmarks;
        })
    }
    public getActiveCities(): number {
          // Returns the count of cities to show dashboard metrics
        return this.cities.filter(city => city.landmarks.length > 0).length
    }
}