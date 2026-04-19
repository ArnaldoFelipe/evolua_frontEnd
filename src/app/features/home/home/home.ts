import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Usuario } from '../../../core/models/usuario';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ArnoldService } from '../../../core/services/arnold-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
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
  mensagens: {texto: string; tipo : 'user' | 'bot'}[] = [
    {
      texto: 'Olá! Sou o Arnold, seu assistente fitness! Como posso te ajudar hoje?',
      tipo: 'bot'
    }
  ];

  constructor(private usuarioService: UsuarioService,
              private authService: AuthService,
              private router: Router,
              private cd: ChangeDetectorRef,
              private arnoldService: ArnoldService){}

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

    const texto = this.mensagem

    this.mensagens.push({
      texto,
      tipo: 'user'
    });

    this.mensagem = '';

    this.arnoldService.chat(texto).subscribe({
      next: (res) => {
        this.mensagens.push({
          texto: res.mensagem,
          tipo: 'bot'
        });

        this.cd.detectChanges();
        console.log('Reposta completa', res)
      },
      error: ()=> {
        this.mensagens.push({
          texto: 'Erro ao falar com Arnold',
          tipo: 'bot'
        });
      }
    });
  }
}
