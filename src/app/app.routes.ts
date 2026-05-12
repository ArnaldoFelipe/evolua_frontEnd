import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home/home';
import { authGuard } from './core/guards/auth-guard';
import { Treino } from './features/treino/treino/treino';
import { Dieta } from './features/dieta/dieta/dieta';
import { Perfil } from './features/perfil/perfil/perfil';
import { Cadastro } from './features/cadastro/cadastro/cadastro';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component:Login},
    {path: 'cadastro', component:Cadastro},
    {path: 'home', component:Home, canActivate:[authGuard]},
    {path: 'treino', component:Treino, canActivate:[authGuard]},
    {path: 'dieta', component:Dieta, canActivate:[authGuard]},
    {path: 'perfil', component:Perfil, canActivate:[authGuard]}
];
