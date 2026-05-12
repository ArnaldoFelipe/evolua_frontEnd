import { Component, OnInit } from '@angular/core';
import { DietaService } from '../../../core/services/dieta-service';
import { PlanoDieta, DiaDieta } from '../../../core/models/dieta.model';
import { ChangeDetectorRef } from '@angular/core';
import { Sidebar } from '../../../shared/components/sidebar/sidebar/sidebar';
import { ArnoldChat } from '../../../shared/components/arnold/arnold-chat/arnold-chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dieta',
  imports: [ArnoldChat, Sidebar, CommonModule],
  templateUrl: './dieta.html',
  styleUrl: './dieta.scss',
})
export class Dieta implements OnInit{

  planoDieta?: PlanoDieta;
  diaAberto?: DiaDieta;
  loading = true;
  erro = '';

  constructor(private dietaService: DietaService,
              private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.dietaService.getMinhaDieta().subscribe({
      next: (res) => {
        this.planoDieta = res;
        this.loading = false;
        this.cd.detectChanges();
      },
      error: ()=>{
        this.erro = 'Erro ao carregar Treino';
        this.loading = false;
      }
    });
  }

  toggleDiaAberto(dia: DiaDieta){
    this.diaAberto = this.diaAberto === dia ? undefined: dia;
  }
}
