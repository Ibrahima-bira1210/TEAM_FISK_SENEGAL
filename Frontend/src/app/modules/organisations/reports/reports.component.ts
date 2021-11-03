import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ReportService} from "../../../services/report/report.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports : any;

  constructor(private reportService : ReportService) { }

  ngOnInit() {
    this.reportsList();
  }

  reportsList() : void{
    this.reportService.getAllReports("69393442-7a46-4edc-a401-39649829d5e4").subscribe(
      data =>{
        this.reports = data.content;
        console.log(this.reports)
      },
      error =>{
        console.log(error);
      }
    )
  }

}
