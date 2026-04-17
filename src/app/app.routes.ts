import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home/home';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component:Login},
    {path: 'home', component:Home, canActivate:[authGuard]}
];
