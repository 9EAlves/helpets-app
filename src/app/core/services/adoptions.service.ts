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

  createAdoption(body: Adoption): Observable<HttpResponse<Adoption>> {
    return this.http.post<Adoption>(`${API_URL}/adoption/create`, body, { observe: 'response' })
  }

  findAllAdoptions(): Observable<HttpResponse<Adoption[]>> {
    return this.http.get<Adoption[]>(`${API_URL}/adoption/viewAll`, { observe: 'response' })
  }

  findAdoptionById(adoptionId: String): Observable<HttpResponse<Adoption>> {
    return this.http.get<Adoption>(`${API_URL}/adoption/viewOne/${adoptionId}`, { observe: 'response' })
  }
}
