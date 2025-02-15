import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as LeafMap from 'leaflet';

@Component({
    selector: 'component-map',
    template: `
    <div #mapContainer class="border-2 border-orange-300 w-full h-full z-10"></div>
  `,
})
export class MapComponent implements OnInit {
    @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
    @Input() lat: number = 0;
    @Input() lng: number = 0;
    private map!: L.Map;

    ngOnInit() {

    }
    ngAfterViewInit(): void {
        if (!this.mapContainer.nativeElement) return;
        this.map = LeafMap.map(this.mapContainer.nativeElement).setView([this.lat, this.lng], 13);
        LeafMap.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);
        LeafMap.marker([this.lat, this.lng]).addTo(this.map)
            .openPopup();
        setTimeout(() => this.map.invalidateSize(), 100);
        ;
    }
}
