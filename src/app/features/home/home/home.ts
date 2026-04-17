import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Usuario } from '../../../core/models/usuario';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  usuario?: Usuario;
  loading = true;
  isSideBarOpen = false;
  isChatOpen = false;
  mensagem = '';
  erroMessage = '';

  constructor(private usuarioService: UsuarioService,
              private authService: AuthService,
              private router: Router,
              private cd: ChangeDetectorRef){}

  ngOnInit(): void{
    this.usuarioService.getUsuarioLogado().subscribe({
      next:(usuario) => {
        console.log(usuario);
        this.usuario = usuario;
        this.loading = false;

        this.cd.detectChanges();
      },
      error: (error) => {
        console.log('não foi possivel buscar usuario', error)
        this.erroMessage = '';
        this.loading = false;
      }
    });
  }

  toggleSideBar(): void {
    console.log('clicou');
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  enviarMensagem(): void{
    if(!this.mensagem.trim()) return;
  }
}
