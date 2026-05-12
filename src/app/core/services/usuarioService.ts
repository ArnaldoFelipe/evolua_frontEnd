import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, UsuarioRequest } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private api = 'http://localhost:8080/usuarios';
  private authApi = 'http://localhost:8080/auth';

  constructor(private http: HttpClient){}

  getUsuarioLogado(): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.api}/me`)
  }

  criarUsuario(usuario: UsuarioRequest): Observable<UsuarioRequest>{
    return this.http.post<UsuarioRequest>(`${this.authApi}/cadastro`, usuario)
  } 
}
