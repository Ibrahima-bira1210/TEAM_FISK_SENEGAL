import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private  httpClient : HttpClient) { }

  addOrganisation(data: any) : Observable<any>{
    return this.httpClient.post(environment.BASE_URL + "org", data);
  }

  getAllOrganisation() : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "org");
  }

  getOrganisation(id : any) : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "org/" +id);
  }

  getCord() : Observable<any>{
    return this.httpClient.get(environment.BASE_URL + "org/localization");
  }


}
