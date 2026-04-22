import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanoTreino } from '../models/treino.model';

@Injectable({
  providedIn: 'root',
})
export class TreinoService {

  private api = 'http://localhost:8080/planosTreino';

  constructor(private http: HttpClient){}

  getMeuTreino(): Observable<PlanoTreino>{
    return this.http.get<PlanoTreino>(`${this.api}/me`);
  }
}
