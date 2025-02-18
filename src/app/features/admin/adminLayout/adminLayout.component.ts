import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { IconService } from "../../../shared/services/icon.servcie";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    templateUrl: './adminLayout.component.html',
    selector: 'admin-layout',
    imports: [RouterOutlet, FontAwesomeModule, RouterLink]
})

export class Admin_Layout {

    public iconService = inject(IconService);
    auth = inject(AuthService);
    user: any = null;
    ngOnInit() {
        this.auth.user$.subscribe(userData => { this.user = userData; });
    }
    logout(): void {
        this.auth.logout({ logoutParams: { returnTo: 'http://localhost:4200/auth/login' } })
    }

}