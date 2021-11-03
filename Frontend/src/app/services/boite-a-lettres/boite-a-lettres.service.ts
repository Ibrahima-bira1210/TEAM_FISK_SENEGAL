import { Injectable } from '@angular/core';
import {ReportService} from "../report/report.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoiteALettresService {

  constructor(private  httpClient : HttpClient) { }

  getAllBoites() : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "letterbox/organization/69393442-7a46-4edc-a401-39649829d5e4");
  }

  getOneBoite(id : any) : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "letterbox/" +id);
  }
}
