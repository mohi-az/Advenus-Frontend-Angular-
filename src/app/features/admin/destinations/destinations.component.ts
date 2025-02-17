import { Component, inject, ViewChild } from "@angular/core";
import { Validators, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { IconService } from "../../../shared/services/icon.servcie";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ComponentModal } from "../../../shared/components/modal/modal.component";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { AppState } from '../../../states/app.state'
import { selectLandmarks } from '../../../states/landmark/landmark.selectors'
import { LandmarkView } from "../../../shared/types/types";
import * as LandmarkActions from '../../../states/landmark/landmark.actions'
import { mergeMap, take, tap } from "rxjs";
import { StaticDataService } from "../../../shared/services/staticData.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'admin-destinations',
  templateUrl: './destinations.component.html',
  imports: [ReactiveFormsModule, FontAwesomeModule, ComponentModal],

})
export class Admin_DestinationsComponent {
  iconService = inject(IconService);
  statisDataService = inject(StaticDataService)
  toastrService = inject(ToastrService)
  actions$ = inject(Actions);
  store = inject(Store<AppState>);
  formBuilder = inject(FormBuilder);
  @ViewChild(ComponentModal) modal!: ComponentModal;
  landmarks: LandmarkView[] = []
  filteredLandmarks: LandmarkView[] = []
  search = new FormControl('');

  isFormBusy = false;
  selectedLandmark: LandmarkView | null = null
  filteredCity: { id: number; name: string; countryId: number; }[] = [];
  ngOnInit() {
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
      this.filteredLandmarks = this.landmarks = landmarks;
    })
    this.search.valueChanges.subscribe(text => {
      if (text && text.length > 0) {
        this.filteredLandmarks = this.landmarks.filter(a => a.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      }
      else
        this.filteredLandmarks = this.landmarks;
    }
    )
  }
  landmarkForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(5)]],
    imageURL: ['', Validators.required],
    visitDuration: ['', [Validators.min(1), Validators.max(500)]],
    city: ['', Validators.required],
    country: ['']
  });
  GetCity() {
    if (this.landmarkForm.controls.country.value)
      this.filteredCity = this.statisDataService.getFilteredCitiesByCountryName(this.landmarkForm.controls.country.value)
  }
  openModal(landmark?: LandmarkView) {

    if (landmark) {
      this.selectedLandmark = landmark;
      this.filteredCity = this.statisDataService.getFilteredCitiesByCountryName(landmark.countryName);
      this.landmarkForm.setValue({
        city: landmark.cityId.toString(),
        country: landmark.countryName.toString(), description: landmark.description
        , imageURL: landmark.imageURL, name: landmark.name, visitDuration: landmark.visitDuration ? landmark.visitDuration.toString() : null
      })

    }
    else {
      this.selectedLandmark = null;
      this.landmarkForm.reset()

    }
    this.modal.openModal();
  }
  submitForm() {
    if (this.landmarkForm.valid) {
      this.isFormBusy = true;
      // get city informations to create a city if it's a new
      let cityName =  this.statisDataService.getCities().find(c => c.id === Number(this.landmarkForm.value.city))?.name ??''
      let countryName = this.statisDataService.getCountries().find(c => c.name === this.landmarkForm.value.country)?.name ??''
      //Add
      if (!this.selectedLandmark) {

        this.store.dispatch(LandmarkActions.addLandmarks({
          Landmark: {
            cityId: this.landmarkForm.value.city ? parseInt(this.landmarkForm.value.city.toString()) : 0,
            description: this.landmarkForm.value.description ?? '',
            image_url: this.landmarkForm.value.imageURL ?? null,
            name: this.landmarkForm.value.name ?? '',
            visit_duration: this.landmarkForm.value.visitDuration ? parseInt(this.landmarkForm.value.visitDuration) : null,
            cityName: cityName,
            countryName: countryName,
          }
        }));

      }
      //update
      else {

        this.store.dispatch(LandmarkActions.updateLandmarks({
          Landmark: {
            cityId: this.landmarkForm.value.city ? parseInt(this.landmarkForm.value.city.toString()) : 0,
            description: this.landmarkForm.value.description ?? '',
            image_url: this.landmarkForm.value.imageURL ?? null,
            name: this.landmarkForm.value.name ?? '',
            visit_duration: this.landmarkForm.value.visitDuration ? parseInt(this.landmarkForm.value.visitDuration) : null,
            cityName: cityName,
            countryName: countryName
          }, landmarkId: this.selectedLandmark.id,

        }));
      }
      this.actions$.pipe(
        ofType(LandmarkActions.addLandmarksSuccess, LandmarkActions.updateLandmarksSuccess),
        take(1),
        tap((response) => {
          if (response) {
            const toastNumber = this.toastrService.success('The landmark has been added successfully');
            this.modal.closeModal();
            this.landmarkForm.reset();
          }
          else
            this.toastrService.error('Something went wrong, Please try again!');
          this.isFormBusy = false
        })
      ).subscribe(result => this.store.dispatch(LandmarkActions.loadLandmarks())
      );

    } else {
      this.toastrService.error('Please check the form');
    }
  }
  deleteLandmark() {
    if (this.selectedLandmark) {
      this.isFormBusy = true;
      this.store.dispatch(LandmarkActions.deleteLandmarks({ LandmarksId: this.selectedLandmark.id }))
      this.actions$.pipe(
        ofType(LandmarkActions.deleteLandmarksSuccess),
        take(1),
        tap((response) => {
          if (response) {
            this.toastrService.success('The landmark has been deleted successfully');
            this.modal.closeModal();
            this.landmarkForm.reset();
          }
          else {
            this.toastrService.error('Something went wrong, Please try again!');
          }
          this.isFormBusy = false;
        })
      ).subscribe();
    }
  }
}