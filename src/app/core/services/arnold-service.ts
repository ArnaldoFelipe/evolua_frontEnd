import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArnoldResponse } from '../models/arnold.model';


@Injectable({
  providedIn: 'root',
})
export class ArnoldService {

  private api = 'http://localhost:8080/arnold/chat';

  constructor(private http: HttpClient){}

  chat(mensagem: string): Observable<ArnoldResponse>{
    return this.http.post<ArnoldResponse>(`${this.api}`, {mensagem})
  }
}
