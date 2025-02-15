import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer.component";

@Component({
    imports: [NavbarComponent, RouterOutlet, Footer],
    templateUrl:'./layout.component.html',
    selector:'app-layout'
})

export class LayoutComponent {


}