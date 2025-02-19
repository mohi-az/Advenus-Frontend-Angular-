import { Component, inject } from "@angular/core";
import { IntroComponent } from "./intro/intro.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconService } from "../../shared/services/icon.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../states/app.state";
import * as CityAction from '../../states/city/city.actions';
import * as LandmarkActions from '../../states/landmark/landmark.actions';
@Component({
  templateUrl: './home.component.html',
  selector: 'app-home',
  imports: [IntroComponent, CategoriesComponent, FontAwesomeModule]
})
export class HomeComponent {
  private store = inject(Store<AppState>);
  public Brands = inject(IconService);

  ngOnInit() {
    this.store.dispatch(CityAction.loadCities());
    this.store.dispatch(LandmarkActions.loadLandmarks());
  }
}