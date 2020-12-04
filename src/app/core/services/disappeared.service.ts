import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Disappeared } from './../models/disappeared.model'
import { API_URL } from './../api'

@Injectable({
  providedIn: 'root'
})
export class DisappearedService {

  constructor(private http: HttpClient) { }

  params = new HttpParams()
  deleteParams = new HttpParams()

  createDisappeared(body: Disappeared): Observable<HttpResponse<Disappeared>> {
    return this.http.post<Disappeared>(`${API_URL}/authenticated/disappeared/create`, body, { observe: 'response' })
  }
  findAllDisappeared(): Observable<HttpResponse<Disappeared[]>> {
    return this.http.get<Disappeared[]>(`${API_URL}/public/disappeared/viewAll`, { params: this.params, observe: 'response' })
  }

  findDisappearedId(disappearedId: String): Observable<HttpResponse<Disappeared>> {
    return this.http.get<Disappeared>(`${API_URL}/public/disappeared/viewOne/${disappearedId}`, { observe: 'response' })
  }

  updateDisappearedById(disappearedId: String, body: null): Observable<HttpResponse<Disappeared>> {
   return this.http.put<Disappeared>(`${API_URL}/disappeared/update/${disappearedId}`, body, { observe: 'response' })
  }
  deleteDisappearedById(disappearedId: String): Observable<HttpResponse<Disappeared>> {
    return this.http.delete<Disappeared>(`${API_URL}/disappeared/delete/${disappearedId}`, { observe: 'response' })
  }

  updateDisappearedById(disappearedId: String, body: null): Observable<HttpResponse<Disappeared>> {
   return this.http.put<Disappeared>(`${API_URL}/disappeared/update/${disappearedId}`, body, { observe: 'response' })
  }
  deleteDisappearedById(disappearedId: String): Observable<HttpResponse<Disappeared>> {
    return this.http.delete<Disappeared>(`${API_URL}/disappeared/delete/${disappearedId}`, { observe: 'response' })
  }

}
