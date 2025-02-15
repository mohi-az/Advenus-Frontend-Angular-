import { Component } from "@angular/core";
import { Categories } from "../../../shared/services/categories.service";
import { NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from "../../../shared/components/header.component";
@Component({
    templateUrl: './categories.component.html',
    selector: 'app-home-categories',
    imports:[NgOptimizedImage,HeaderComponent]
})
export class CategoriesComponent {
    constructor(private categories: Categories) { }
    Categories = this.categories.getCategoriesWithDetails()

}