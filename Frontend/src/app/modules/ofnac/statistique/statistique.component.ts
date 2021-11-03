
import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  organisations : any;
  cords : any;
  spots : any;
  lat : any;
  lng : any;
  markers: any = [];


  constructor(private organisationService : OrganisationService, private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.organisationsList();
    this.cordList();
    navigator.geolocation.getCurrentPosition((position) => {

      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  zoom = 8
  center: google.maps.LatLngLiteral|any
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,

  }




  organisationsList() : void{
    this.organisationService.getAllOrganisation().subscribe(
      data =>{
        this.organisations = data.content;
        console.log(this.organisations)
      },
      error =>{
        console.log(error);
      }
    )
  }

  cordList() : void{
    this.organisationService.getCord().subscribe(
      data =>{
        this.cords = data;
        console.log(this.cords)
        this.spots=this.cords
        for (var spot of this.spots) {
          let i = ""
          if (spot.color == "rouge"){
            i="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }else if(spot.color == "bleu"){
            i="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }else {
            i="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
          }

          this.addMarker(spot.lat, spot.lng, i)

        }
        console.log(this.markers)
      },
      error =>{
        console.log(error);
      }
    )
  }

  addMarker(lat:any, lng:any, url:any) {

    this.markers.push({
      position: {
        lat: lat ,
        lng: lng ,
      },

      options: { animation: google.maps.Animation.BOUNCE },
      icon: {
        url: url
      },

    })
  }


}

