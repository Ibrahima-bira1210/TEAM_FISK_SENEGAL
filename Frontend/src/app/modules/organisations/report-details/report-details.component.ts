import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../../services/organisation/organisation.service";
import {ActivatedRoute} from "@angular/router";
import {ReportService} from "../../../services/report/report.service";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  report : any;

  constructor(private reportService : ReportService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getOneReport(this.route.snapshot.paramMap.get('id'));
  }

  getOneReport(id:any) : void{
    this.reportService.getOneReport(id).subscribe(
      data =>{
        this.report = data;
        console.log(this.report)
      },
      error =>{
        console.log(error);
      }
    )
  }

}
