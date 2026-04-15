import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Usuario } from '../../../core/models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  usuario?: Usuario;
  loading = true;
  erroMessage = '';

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void{
    this.usuarioService.getUsuarioLogado().subscribe({
      next:(usuario) => {
        this.usuario = usuario;
        this.loading = false;
      },
      error: (error) => {
        console.log('não foi possivel buscar usuario', error)
        this.erroMessage = '';
        this.loading = false;
      }
    });
  }
}
