import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DestinationsComponent } from './features/destinations/destinations.component';
import { CityComponent } from './features/city/city.component';
import { Admin_Layout } from './features/admin/adminLayout/adminLayout.component';
import { Admin_DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { Admin_DestinationsComponent } from './features/admin/destinations/destinations.component';
import { Admin_CitiesComponent } from './features/admin/cities/cities.component';
import { LoginComponent } from './features/auth/login.component';
import { UserProfileComponent } from './features/auth/profile.component';
import { authGuard } from './shared/services/auth-guard.service';
import { AuthCallbackComponent } from './features/auth/auth-callback.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'destinations', component: DestinationsComponent },
            { path: 'destinations/:country/:city', component: CityComponent },
            { path: 'destinations/:name', component: DestinationsComponent },
             { path: '', redirectTo: 'home', pathMatch: 'full' }

        ]
    }, {
        path: 'admin',
        component: Admin_Layout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Admin_DashboardComponent, },
            { path: 'destinations', component: Admin_DestinationsComponent, },
            { path: 'cities', component: Admin_CitiesComponent, },
            { path: 'profile', component: UserProfileComponent, },
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'callback', component: AuthCallbackComponent },

        ]
    }

];
