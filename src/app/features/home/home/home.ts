import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Usuario } from '../../../core/models/usuario';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth';
import { Router, RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArnoldChat } from "../../../shared/components/arnold/arnold-chat/arnold-chat";
import { Sidebar } from "../../../shared/components/sidebar/sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ArnoldChat, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  isChatOpen = false;
  usuario?: Usuario;
  loading = true;
  erroMessage = '';
  
  constructor(private usuarioService: UsuarioService,
              private authService: AuthService,
              private router: Router,
              private cd: ChangeDetectorRef
              ){}

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

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }
}
