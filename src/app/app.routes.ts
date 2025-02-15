import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DestinationsComponent } from './features/destinations/destinations.component';
import { CityComponent } from './features/city/city.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'destinations/:country/:city', component: CityComponent },
    { path: 'destinations/:name', component: DestinationsComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
