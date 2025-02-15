import { Component } from "@angular/core";
import { NgOptimizedImage } from '@angular/common'
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {  faMapMarker, faThumbTack } from "@fortawesome/free-solid-svg-icons";
@Component({
    templateUrl:'./intro.component.html',
    selector:'app-home-intro',
    imports:[NgOptimizedImage,FontAwesomeModule]
})
export class IntroComponent{
    countryIcon=faMapMarker
    cityIcon=faThumbTack
}