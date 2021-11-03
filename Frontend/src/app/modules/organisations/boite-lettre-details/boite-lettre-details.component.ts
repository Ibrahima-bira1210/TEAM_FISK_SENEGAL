import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {ActivatedRoute} from "@angular/router";
import {BoiteALettresService} from "../../../services/boite-a-lettres/boite-a-lettres.service";

@Component({
  selector: 'app-boite-lettre-details',
  templateUrl: './boite-lettre-details.component.html',
  styleUrls: ['./boite-lettre-details.component.css']
})
export class BoiteLettreDetailsComponent implements OnInit {

  boite : any;

  constructor(private boiteService : BoiteALettresService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getOneBoite(this.route.snapshot.paramMap.get('id'));
  }

  getOneBoite(id:any) : void{
    this.boiteService.getOneBoite(id).subscribe(
      data =>{
        this.boite = data;
        console.log(this.boite)
      },
      error =>{
        console.log(error);
      }
    )
  }

}
