import { DiaSemana, ObjetivoFitness } from "./treino.model";

export interface PlanoDieta {
    planoId: number;
    usuarioId: number;
    objetivoFitness: ObjetivoFitness;
    caloriasDiarias: number;
    ativo: boolean;
    dataCriacao: string;
    dias: DiaDieta[]
}

export interface DiaDieta {
    dia: DiaSemana;
    refeicoes: Refeicao[];
}

export interface Refeicao{
    refeicaoId: number;
    diaDietaId: number;
    tpRefeicao: TipoRefeicao;
    nome: string;
    calorias: number;
}

export type TipoRefeicao = 
   | 'CAFE_DA_MANHA'
   | 'LANCHE_DA_MANHA'
   | 'ALMOCO'
   | 'LANCHE_DA_TARDE'
   | 'JANTAR'
   | 'CEIA';

