import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specie } from './../models/species.model';
import { API_URL } from './../api';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(
    private http: HttpClient
  ) { }

  createSpecie(body: Specie): Observable<HttpResponse<Specie>> {
    return this.http.post<Specie>(`${API_URL}/species/create`, body, { observe: 'response' })
  }

  findAllSpecie(): Observable<HttpResponse<Specie[]>> {
    return this.http.get<Specie[]>(`${API_URL}/species/viewAll`, { observe: 'response' })
  }
}
