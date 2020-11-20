import { API_URL } from './../api';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAllUser(): Observable<HttpResponse<User[]>>{
    return this.http.get<User[]>(`${API_URL}/user/viewAll`, {observe: 'response'})
  }

  findOngById(ongId: String): Observable<HttpResponse<User>>{
    return this.http.get<User>(`${API_URL}/user/viewOne/${ongId}`, {observe: 'response'})
    
  }

}
