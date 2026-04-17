import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { LoginRequest } from '../../../core/models/auth.model';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  private fb = inject(FormBuilder)

  constructor(private auth:AuthService,
              private router:Router
  ){}

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(2)]]
  })

  entrar(): void{
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const credenciais: LoginRequest =  this.form.getRawValue();

    this.auth.login(credenciais).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => {
        console.log('Erro ao realizar login');
      }
    });
  }
}
