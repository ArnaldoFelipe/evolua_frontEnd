import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../../../core/services/treino-service';
import { DiaTreino, PlanoTreino } from '../../../core/models/treino.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-treino',
  imports: [CommonModule],
  templateUrl: './treino.html',
  styleUrl: './treino.scss',
})
export class Treino implements OnInit{

  plano?: PlanoTreino;
  loading = true;
  erro = '';

  diaAberto?: DiaTreino;

  constructor(private treinoService: TreinoService,
              private cd: ChangeDetectorRef){}

  ngOnInit(): void {
    this.treinoService.getMeuTreino().subscribe({
      next: (res) => {
        this.plano = res;
        this.loading = false;
        this.cd.detectChanges();
      },
      error: () =>{
        this.erro = 'erro ao carregar Trenio';
        this.loading = false;
      }
    });
  }

  toggleDia(dia: DiaTreino){
    this.diaAberto = this.diaAberto === dia ? undefined: dia;
  }
}
