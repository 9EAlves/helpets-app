import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from './../models/adoption.model';
import { API_URL } from './../api';

@Injectable({
  providedIn: 'root'
})
export class AdoptionsService {

  constructor(
    private http: HttpClient
  ) { }

  params = new HttpParams()
  deleteParams = new HttpParams()

  createAdoption(body: Adoption): Observable<HttpResponse<Adoption>> {
    return this.http.post<Adoption>(`${API_URL}/authenticated/adoption/create`, body, { observe: 'response' })
  }

  findAllAdoptions(): Observable<HttpResponse<Adoption[]>> {
    return this.http.get<Adoption[]>(`${API_URL}/public/adoption/viewAll`, { params: this.params, observe: 'response' })
  }

  findAdoptionById(adoptionId: String): Observable<HttpResponse<Adoption>> {
    return this.http.get<Adoption>(`${API_URL}/public/adoption/viewOne/${adoptionId}`, { observe: 'response' })
  }

  updateAdoptionById(adoptionId: String, body: null): Observable<HttpResponse<Adoption>> {
    return this.http.put<Adoption>(`${API_URL}/adoption/update/${adoptionId}`, body, { observe: 'response' })
   }
   deleteAdoptionById(adoptionId: String): Observable<HttpResponse<Adoption>> {
     return this.http.delete<Adoption>(`${API_URL}/adoption/delete/${adoptionId}`, { observe: 'response' })
   }
 
}
