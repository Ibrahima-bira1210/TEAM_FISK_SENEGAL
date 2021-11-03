import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private  httpClient : HttpClient) { }

  getAllReports(id:any) : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "reports/organization/" +id);
  }

  getOneReport(id : any) : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "reports/" +id);
  }

}
