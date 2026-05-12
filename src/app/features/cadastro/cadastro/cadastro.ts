import { Component } from '@angular/core';
import { Usuario, UsuarioRequest } from '../../../core/models/usuario';
import { UsuarioService } from '../../../core/services/usuarioService';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {

  erro = '';
  cadastroForm: FormGroup
  
  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private fb: FormBuilder
  ){
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      peso: [0],
      altura: [0],
      dataNascimento: ['']
    })
  }
  
  cadastrar(){
    if(this.cadastroForm.invalid){
      return;
    }

    const request = this.cadastroForm.value as UsuarioRequest;

    this.usuarioService.criarUsuario(request).subscribe({
      next: () => {
        alert("Usuario criado com sucesso")
        this.router.navigate(['/login']);
      },
      error: ()=>{
        this.erro = "Erro ao criar usuario";
      }
    })
  }
}
