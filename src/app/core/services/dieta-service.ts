import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanoDieta } from '../models/dieta.model';

@Injectable({
  providedIn: 'root',
})
export class DietaService {

  private api = 'http://localhost:8080/planosDieta';

  constructor(private http: HttpClient){}

  getMinhaDieta(): Observable<PlanoDieta>{
    return this.http.get<PlanoDieta>(`${this.api}/me`)
  }
}
