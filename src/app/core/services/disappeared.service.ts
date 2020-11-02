import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Disappeared} from './../models/disappeared.model'
import {API_URL} from './../api'
@Injectable({
  providedIn: 'root'
})
export class DisappearedService {

  constructor (private http: HttpClient) { }

  findAllDisappeared(): Observable<HttpResponse<Disappeared[]>>{
    return this.http.get<Disappeared[]>(`${API_URL}/disappeared/viewAll`, {observe:'response'})
  }
}
