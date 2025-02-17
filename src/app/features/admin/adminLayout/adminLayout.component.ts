import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { IconService } from "../../../shared/services/icon.servcie";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
    templateUrl: './adminLayout.component.html',
    selector: 'admin-layout',
    imports:[RouterOutlet,FontAwesomeModule,RouterLink]
})

export class Admin_Layout {

    public iconService = inject(IconService);
}