import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { IconService } from "../../../shared/services/icon.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    templateUrl: './adminLayout.component.html',
    selector: 'admin-layout',
    imports: [RouterOutlet, FontAwesomeModule, RouterLink]
})

export class AdminLayoutComponent {

    public iconService = inject(IconService);
    private authService  = inject(AuthService);
    user: any = null;
    isAuthenticated = false;

    ngOnInit() {
        // Subscribe to Auth0's user observable to fetch authenticated user data and show a avatar
        this.authService.user$.subscribe(userData => { this.user = userData; });
    }
    logout(): void {
        this.authService.logout({ logoutParams: { returnTo: 'http://localhost:4200/auth/login' } })
    }

}