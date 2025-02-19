import { Component, inject } from "@angular/core";
import { NgOptimizedImage } from '@angular/common'
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMapMarker, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { SearchableSelectComponent } from "../../../shared/components/searchableSelect.component";
import { StaticDataService } from "../../../shared/services/staticData.service";
import { selectAllCities } from "../../../states/city/city.selectors";
import { mergeMap } from "rxjs";
import * as CityAction from '../../../states/city/city.actions';
import { City } from "../../../shared/types/types";
import { Store } from "@ngrx/store";
import { AppState } from "../../../states/app.state";
import { Router } from "@angular/router";

@Component({
    templateUrl: './intro.component.html',
    selector: 'app-home-intro',
    imports: [NgOptimizedImage, FontAwesomeModule, SearchableSelectComponent]
})
export class IntroComponent {
    store = inject(Store<AppState>)
    router = inject(Router);
    countryIcon = faMapMarker
    cityIcon = faThumbTack
    StaticDataService = inject(StaticDataService);
    filteredCities: { id: number; name: string; }[] = [];
    allAvailableCities: City[] = []
    selectedCityName: City | null = null
    selectedCountryName: string | null = null
    ngOnInit() {
        this.LoadDestinations();
    }
    onCountryelected(item: { id: number; name: string; }): void {
        this.selectedCityName = null;
        if (item.id) {
            this.filteredCities = this.allAvailableCities.filter(city => city.country === item.name);
            this.selectedCountryName = item.name
        }
        else {
            this.filteredCities = this.allAvailableCities
            this.selectedCountryName = null;
        }
    }
    onCitySelected(item: { id: number; name: string; }): void {
        if (item.name) {
            this.selectedCityName = this.allAvailableCities.find(city => city.id === item.id) ?? null
        }
        else this.selectedCityName = null
    }
    goToDestination(): void {
        if (this.selectedCityName)
            this.router.navigate(['/destinations/' + this.selectedCityName.country.toLocaleLowerCase() + "/" + this.selectedCityName.name.toLocaleLowerCase()])
    }
    private LoadDestinations() {
        this.store.select(selectAllCities).pipe(
            mergeMap(result => {
                if (Array.isArray(result) && result.length > 0) return [result];
                else {
                    this.store.dispatch(CityAction.loadCities())
                    return this.store.select(selectAllCities)
                }
            })
        ).subscribe((cities) => {
            this.filteredCities = this.allAvailableCities = cities.filter(city => city.landmarks.length > 0);
        });
    }
}