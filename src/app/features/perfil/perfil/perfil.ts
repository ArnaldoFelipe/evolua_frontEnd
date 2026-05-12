import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Usuario } from '../../../core/models/usuario';
import { Sidebar } from "../../../shared/components/sidebar/sidebar/sidebar";
import { ArnoldChat } from "../../../shared/components/arnold/arnold-chat/arnold-chat";
import { FormsModule } from '@angular/forms';
import { TreinoService } from '../../../core/services/treino-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [Sidebar, ArnoldChat, FormsModule, CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil implements OnInit{

  usuario?: Usuario;
  modoEdicao = false;

  constructor(private usuarioService: UsuarioService,
              private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.usuarioService.getUsuarioLogado().subscribe({
      next:(usuario) =>{
        this.usuario = usuario;
        this.cd.detectChanges();
      },
      error: (error) =>{
        console.log('Não foi possivel buscar as informações do usuario', error)
      }
    })
  }

  editarPerfil(): void {
    console.log('editando');
    this.modoEdicao = !this.modoEdicao;
  }

  salvarPerfil(): void{}
}
