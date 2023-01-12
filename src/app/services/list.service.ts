import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Animal } from './../components/interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  //Pegar todos
  getAll(): Observable<Animal[]>{
   return this.http.get<Animal[]>(this.apiUrl + 'animals');   
  }
}
