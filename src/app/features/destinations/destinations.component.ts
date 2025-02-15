import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute ,RouterModule} from '@angular/router';
import { AppState } from "../../states/app.state";
import { Store } from "@ngrx/store";
import { selectAllCities, selectLoading } from "../../states/city/city.selectors";
import { City } from "../../shared/types/types";
import {mergeMap } from "rxjs";
import * as CityAction from '../../states/city/city.actions';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { IconService } from "../../shared/services/icon.servcie";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    imports: [RouterModule,CommonModule,FontAwesomeModule,NgOptimizedImage]
})
export class DestinationsComponent {
    private readonly route = inject(ActivatedRoute);
    public  icon = inject(IconService);
    private store = inject(Store<AppState>);
    loading = signal<boolean>(false);
    cities:City[]=[]
    ngOnInit() {
        this.store.select(selectAllCities).pipe(
            mergeMap(result => {
                if (Array.isArray(result) && result.length > 0) return [result];
                else {
                    this.store.dispatch(CityAction.loadCities())
                    return this.store.select(selectAllCities)
                }
            })
        ).subscribe((cities) => {
            this.cities=cities;
        });
        this.store.select(selectLoading).subscribe((isLoading) => {
            this.loading.set(isLoading);
        });
    }
}