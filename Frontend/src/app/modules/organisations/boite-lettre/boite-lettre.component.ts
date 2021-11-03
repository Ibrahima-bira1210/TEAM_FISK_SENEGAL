import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../../services/report/report.service";
import {BoiteALettresService} from "../../../services/boite-a-lettres/boite-a-lettres.service";
import {AuthGuard} from "../../../services/Auth/auth.guard";
import {AuthService} from "../../../services/Auth/auth.service";

@Component({
  selector: 'app-boite-lettre',
  templateUrl: './boite-lettre.component.html',
  styleUrls: ['./boite-lettre.component.css']
})
export class BoiteLettreComponent implements OnInit {

  boites : any;

  constructor(private boitesService : BoiteALettresService) { }

  ngOnInit() {
    this.boitesList();
  }

  boitesList() : void{
    this.boitesService.getAllBoites().subscribe(
      data =>{
        this.boites = data.content;
        console.log(this.boites)
      },
      error =>{
        console.log(error);
      }
    )
  }
}
