import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL : string ="http://localhost:8080/api/org";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private  httpClient : HttpClient) { }

  addOrganisation(data: any) : Observable<any>{
    return this.httpClient.post(BASE_URL, data);
  }

  getAllOrganisation() : Observable<any>{
    return this.httpClient.get(BASE_URL);
  }

  getOrganisation(id : any) : Observable<any>{
    return this.httpClient.get(`${BASE_URL}/${id}`);
  }


}
