import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Disappeared } from './../models/disappeared.model'
import { API_URL } from './../api'

@Injectable({
  providedIn: 'root'
})
export class DisappearedService {

  constructor(private http: HttpClient) { }

  createDisappeared(body: Disappeared): Observable<HttpResponse<Disappeared>> {
    return this.http.post<Disappeared>(`${API_URL}/disappeared/create`, body, { observe: 'response' })
  }
  findAllDisappeared(): Observable<HttpResponse<Disappeared[]>> {
    return this.http.get<Disappeared[]>(`${API_URL}/disappeared/viewAll`, { observe: 'response' })
  }

  findDisappearedId(disappearedId: String): Observable<HttpResponse<Disappeared>> {
    return this.http.get<Disappeared>(`${API_URL}/disappeared/viewOne/${disappearedId}`, { observe: 'response' })
  }

}
