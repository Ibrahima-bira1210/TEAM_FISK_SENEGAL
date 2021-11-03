import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.css']
})
export class OrganisationDetailsComponent implements OnInit {

  organisation : any;
  lat : any;
  lng : any;
  spots:any;
  markers: any = [];


  constructor(private organisationService : OrganisationService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getOrganisations(this.route.snapshot.paramMap.get('id'));
  }

  myLatLng = { lat: 14.7645042, lng: -17.3660286 }; // Map Options
  mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 7,
  };

  markerOptions: google.maps.MarkerOptions = {};


  getOrganisations(id:any) : void{
    this.organisationService.getOrganisation(id).subscribe(
      data =>{

        this.organisation = data;
        this.lat = this.organisation.latitude
        this.lng = this.organisation.longitude
        console.log(this.organisation)

        this.spots = [

          {lat: this.lat, lng: this.lng},

        ];
      },
      error =>{
        console.log(error);
      }
    )

  }

}
