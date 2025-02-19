import { Component, inject, ViewChild } from "@angular/core";
import { IconService } from "../../../shared/services/icon.service";
import { StaticDataService } from "../../../shared/services/staticData.service";
import { ToastrService } from "ngx-toastr";
import { Actions, ofType } from "@ngrx/effects";
import { AppState } from "../../../states/app.state";
import { Store } from "@ngrx/store";
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ComponentModal } from "../../../shared/components/modal/modal.component";
import { City, CityFormValue } from "../../../shared/types/types";
import * as CityActions from '../../../states/city/city.actions'
import { mergeMap, take, tap } from "rxjs";
import { selectAllCities, selectLoading } from "../../../states/city/city.selectors";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'admin-cities',
    templateUrl: './cities.component.html',
    imports: [FontAwesomeModule, ReactiveFormsModule, ComponentModal]
})

export class AdminCitiesComponent {

    iconService = inject(IconService);
    statisDataService = inject(StaticDataService)
    private toastrService = inject(ToastrService)
    private actions$ = inject(Actions);
    private store = inject(Store<AppState>);
    private formBuilder = inject(FormBuilder);

    @ViewChild(ComponentModal) modal!: ComponentModal;
    cities: City[] = []
    filteredcities: City[] = []
    search = new FormControl('');
    loading = false;
    isFormBusy = false;
    selectedCity: City | null = null
    filteredCity: { id: number; name: string; countryId: number; }[] = [];

    cityFormGroup = this.formBuilder.group({
        city: ['', [Validators.required]],
        description: ['', Validators.required],
        name_native: [''],
        country: ['', Validators.required],
        continent: [''],
        latitude: ['', [Validators.required, Validators.min(-90), Validators.max(90), Validators.pattern('^-?[0-9]+(\\.[0-9]+)?$')]],
        longitude: ['', [Validators.required, Validators.min(-180), Validators.max(180), Validators.pattern('^-?[0-9]+(\\.[0-9]+)?$')]],
        population: [''],
        founded: ['', [Validators.min(100), Validators.max(2000)]]
    })
    ngOnInit() {
        this.loadCities();
        this.setupSearch();
        this.store.select(selectLoading).subscribe(isLoading => {
            this.loading = isLoading;
        });
    }
    private loadCities(): void {
        // Fetch cities from the store, dispatch action if empty
        this.store.select(selectAllCities).pipe(
            mergeMap(cities => {
                if (cities.length) return [cities];
                this.store.dispatch(CityActions.loadCities());
                return this.store.select(selectAllCities);
            })
        ).subscribe(cities => {
            this.cities = this.filteredcities = cities;
        });
    }

    private setupSearch(): void {
        this.search.valueChanges.subscribe(text => {
            this.filteredcities = text && text.length > 0
                ? this.cities.filter(city => city.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
                : this.cities;
        });
    }
    openModal(city?: City): void {
        this.isFormBusy = false;
        if (city) {
            this.cityFormGroup.controls.city.disable();
            this.cityFormGroup.controls.country.disable();
            this.selectedCity = city;
            this.filteredCity = this.statisDataService.getFilteredCitiesByCountryName(city.country)
            this.cityFormGroup.setValue({
                city: city.id.toString(),
                continent: city.continent,
                description: city.description,
                founded: city.founded,
                latitude: city.latitude,
                longitude: city.longitude,
                name_native: city.name_native,
                population: city.population,
                country: city.country
            })
        }
        else {
            this.cityFormGroup.controls.city.enable();
            this.cityFormGroup.controls.country.enable();
            this.selectedCity = null;
            this.cityFormGroup.reset()
        }
        this.modal.openModal();
    }
    submitForm(): void {
        const formValue: CityFormValue = this.cityFormGroup.getRawValue() as CityFormValue;
        const selectedCityId = parseInt(formValue.city ?? '', 0);
        const selectedCity = this.statisDataService.getCities().find(city => city.id === selectedCityId);
        this.isFormBusy = true;
        const cityName = selectedCity ? selectedCity.name : '';
        if (!this.selectedCity) {
            this.addCity(cityName, formValue);
            this.handleResponse('add');
        } else {
            this.updateCity(cityName, formValue);
            this.handleResponse('update');
        }
    }
    private addCity(cityName: string, formValue: CityFormValue): void {
        this.store.dispatch(CityActions.addCity({
            cities: this.getCityObject(cityName, formValue)
        }));
    }

    private updateCity(cityName: string, formValue: CityFormValue): void {
        const city = this.getCityObject(cityName, formValue);
        delete city.id; // Remove the city ID before updating to avoid conflicts with the store's state
        this.store.dispatch(CityActions.updateCity({
            cities: city,
            cityId: formValue.city ? parseInt(formValue.city) : 0,
        }));

    }
    private getCityObject(cityName: string, formValue: CityFormValue): any {
        return {
            name: cityName,
            id: this.cityFormGroup.value.city ? parseInt(this.cityFormGroup.value.city) : 0,
            name_native: this.cityFormGroup.value.name_native ?? '',
            country: formValue.country ?? '',
            description: this.cityFormGroup.value.description ?? '',
            latitude: this.cityFormGroup.value.latitude?.toString() ?? '',
            longitude: this.cityFormGroup.value.longitude?.toString() ?? '',
            continent: this.cityFormGroup.value.continent ?? '',
            population: this.cityFormGroup.value.population?.toString() ?? '',
            founded: this.cityFormGroup.value.founded?.toString() ?? ''
        };
    }
    deleteCity(): void {
        if (this.selectedCity) {
            this.isFormBusy = true;
            this.store.dispatch(CityActions.deleteCity({ cityId: this.selectedCity.id }));
        }
    }
    private handleResponse(actionType: 'add' | 'update'): void {
        const successAction = actionType === 'add' ? CityActions.addCitySuccess : CityActions.updateCitySuccess;
        this.actions$.pipe(
            ofType(successAction),
            take(1),
            tap(response => {
                if (response) {
                    this.toastrService.success(actionType === 'add' ? 'The City has been added successfully' : "The landmark has been deleted successfully");
                    this.modal?.closeModal();
                    this.cityFormGroup.reset();
                } else {
                    this.toastrService.error('Something went wrong, please try again!');
                }
            })
        ).subscribe(() => {
            this.isFormBusy = false;
            this.cityFormGroup.controls.city.enable();
            this.cityFormGroup.controls.country.enable();
            this.store.dispatch(CityActions.loadCities());
        });
    }
    GetCity(): void {
        if (this.cityFormGroup.controls.country.value) {
            let cities = this.statisDataService.getFilteredCitiesByCountryName(this.cityFormGroup.controls.country.value)
            this.filteredCity = cities.filter(c => !this.filteredcities.some(existingCity => existingCity.id === c.id)
            );
        }
    }
}

