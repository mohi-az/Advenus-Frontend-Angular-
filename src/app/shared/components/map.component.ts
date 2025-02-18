import { Component, OnInit, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import * as LeafMap from 'leaflet';

@Component({
    selector: 'component-map',
    template: `<div #mapContainer class="border-2 border-orange-300 w-full h-full z-10"></div>`,
})
export class MapComponent implements OnInit, AfterViewInit {
    @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
    @Input() latLngs: { lat: number; lng: number,title:string }[] = [];

    private map!: L.Map;
    private markers: L.Marker[] = [];

    ngOnInit() {}

    ngAfterViewInit(): void {
        if (!this.mapContainer.nativeElement || this.latLngs.length === 0) return;
        const initialCenter = this.latLngs[0];
        this.map = LeafMap.map(this.mapContainer.nativeElement).setView([initialCenter.lat, initialCenter.lng], 13);
        LeafMap.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);
        this.latLngs.forEach(({ lat, lng,title }) => {
            const marker = LeafMap.marker([lat, lng],{title}).addTo(this.map);
            this.markers.push(marker);
        });
        this.fitBoundsToMarkers();
    
        setTimeout(() => this.map.invalidateSize(), 100);
    }

    private fitBoundsToMarkers(): void {
        if (this.markers.length > 1) {
            const bounds = LeafMap.latLngBounds(this.markers.map(marker => marker.getLatLng()));
            this.map.fitBounds(bounds, { padding: [50, 50] });
        }
    }
}
