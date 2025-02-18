import { Component, inject } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from "../../../shared/services/icon.servcie";
import { RouterModule } from '@angular/router';
import { AuthService } from "@auth0/auth0-angular";
@Component({
    templateUrl: './navbar.component.html',
    selector: 'app-layout-navbar',
    imports: [FontAwesomeModule, RouterModule]
})
export class NavbarComponent {
    iconService = inject(IconService);
    auth = inject(AuthService);
    user: any = null;
    router: any;
    ngOnInit() {
        this.auth.user$.subscribe(userData => { this.user = userData; });
    }
    redirectToAdmin() {
        if (this.auth.isAuthenticated$)
            return '/admin/dashboard';
        return '/auth/login';

    }
}