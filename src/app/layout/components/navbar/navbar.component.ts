import { Component } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from "../../../shared/services/icon.servcie";
import { RouterModule } from '@angular/router';
@Component({
    templateUrl: './navbar.component.html',
    selector: 'app-layout-navbar',
    imports: [FontAwesomeModule,RouterModule]
})
export class NavbarComponent {
    constructor(public iconService: IconService) { }

}