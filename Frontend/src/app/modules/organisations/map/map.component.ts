import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  lat : any;
  @Input()
  lot : any;

  myLatLng = { lat: 14.7645042, lng: -17.3660286 }; // Map Options
  mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 15,
  };

  markerOptions: google.maps.MarkerOptions = {};

  spots: { id: number; lat: number; lng: number }[] = [
    { id: 1, lat: 14.7645042, lng: -17.3660286 },
    // { id: 2, lat: 48.80528296155103, lng: 2.2111191343824954 },
    // { id: 3, lat: 48.63132261107716, lng: 2.4308456968824954 },
    // { id: 4, lat: 48.77633134372322, lng: 2.4665512632887454 },
    // { id: 5, lat: 48.7871901580939, lng: 2.3127426695387454 },
  ];


}
