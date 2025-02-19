import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DestinationsComponent } from './features/destinations/destinations.component';
import { CityComponent } from './features/city/city.component';
import { AdminLayoutComponent } from './features/admin/adminLayout/adminLayout.component';
import { AdminDashboardComponent } from './features/admin/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDestinationsComponent } from './features/admin/destinations/destinations.component';
import { AdminCitiesComponent } from './features/admin/cities/cities.component';
import { LoginComponent } from './features/auth/login.component';
import { UserProfileComponent } from './features/auth/profile.component';
import { authGuard } from './shared/services/auth-guard.service';
import { AuthCallbackComponent } from './features/auth/auth-callback.component';
import { LandmarkComponent } from './features/landmark/landmark.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'destinations', component: DestinationsComponent },
            { path: 'destinations/:country/:city', component: CityComponent },
            { path: 'destination/landmarks/:landmarkId', component: LandmarkComponent },
            { path: 'destinations/:name', component: DestinationsComponent },
             { path: '', redirectTo: 'home', pathMatch: 'full' }

        ]
    }, {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: AdminDashboardComponent, },
            { path: 'destinations', component: AdminDestinationsComponent, },
            { path: 'cities', component: AdminCitiesComponent, },
            { path: 'profile', component: UserProfileComponent, },
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'callback', component: AuthCallbackComponent }, // // handle auth0

        ]
    }

];
