import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";

@Component({
  selector: 'app-organisations-liste',
  templateUrl: './organisations-liste.component.html',
  styleUrls: ['./organisations-liste.component.css']
})
export class OrganisationsListeComponent implements OnInit {

  organisations : any;

  constructor(private organisationService : OrganisationService) { }

  ngOnInit() {
    this.organisationsList();
  }

  organisationsList() : void{
    this.organisationService.getAllOrganisation().subscribe(
      data =>{
        this.organisations = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
