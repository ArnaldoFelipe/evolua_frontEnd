import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private api = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient){}

  login(credenciais: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.api, credenciais).pipe(
      tap((response)=> {
        localStorage.setItem('token', response.token)
      })
    );
  }

  logout(): void{
    localStorage.removeItem('token');
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean{
    return !!this.getToken();
  }
}
