import { Component, inject } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconService } from "../../../shared/services/icon.service";
import { RouterLink } from "@angular/router";
@Component({
    templateUrl:'./footer.component.html',
    selector:'app-layout-footer',
    imports:[NgOptimizedImage,FontAwesomeModule,RouterLink]
})
export class Footer{
    iconService = inject(IconService)
}