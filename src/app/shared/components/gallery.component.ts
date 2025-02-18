import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LandmarkView } from '../types/types';

@Component({
  selector: 'component-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 p-4">
  @for (landmark of landmarks; track $index) {
     <div class="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        (click)="goToDetail(landmark.id)">
          <img [src]="'upload/images/'+landmark.imageURL" [alt]="landmark.name" class="w-full h-auto rounded-lg">
        <div 
          class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 class="text-lg font-bold">{{ landmark.name }}</h3>
          <p class="text-sm px-4 text-center">{{ landmark.description || 'Click to explore' }}</p>
        </div>
      </div>
     }
    </div>
  `,
})
export class GalleryComponent {
  @Input() landmarks: LandmarkView[] = [];
  router = inject(Router)
  goToDetail(landmarkId: number) {
    this.router.navigate(['destination/landmarks/', landmarkId]);
  }
}
