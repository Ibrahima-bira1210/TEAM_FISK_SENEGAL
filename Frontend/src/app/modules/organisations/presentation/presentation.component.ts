import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/Auth/auth.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  organisation : any;
  id : any;

  constructor(private organisationService : OrganisationService, private route : ActivatedRoute, private  authService : AuthService) { }

  ngOnInit() {
    let id =this.authService.getRoles()[3];
    this.getOrganisations(id);
  }

  myLatLng = { lat: 14.7645042, lng: -17.3660286 }; // Map Options
  mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 10,
  };

  markerOptions: google.maps.MarkerOptions = {};

  spots: { lat: number; lng: number }[] = [

    {lat: 14.7336, lng:  -17.4494},
    // {lat: 15.6558700, lng:  -13.2554400},
    // {lat: 14.791005, lng: -16.935860},

  ];

  getOrganisations(id:any) : void{
    this.organisationService.getOrganisation(id).subscribe(
      data =>{
        this.organisation = data;
        console.log(this.organisation)
      },
      error =>{
        console.log(error);
      }
    )
  }

}
