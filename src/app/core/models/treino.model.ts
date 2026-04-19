export interface PlanoTreino{
    id: number;
    usuarioId: number;
    objetivoFitness: ObjetivoFitness;
    volumeTreino: VolumeTreino;
    ativo: boolean;
    dataCriacao: string;
    dias: DiaTreino[];
}

export interface DiaTreino {
    dia: DiaSemana;
    grupoMuscular: GrupoMuscular;
    treinos: Treino[];
}

export interface Treino {
    id: number;
    diaTreinoId: number;
    exercicioId: number;
    nomeExercicio: string;
    series: number;
    repeticoes: number;
}

export type DiaSemana = 
   | 'DOMINGO'
   | 'SEGUNDA'
   | 'TERCA'
   | 'QUARTA'
   | 'QUINTA'
   | 'SEXTA'
   | 'SABADO';

export type GrupoMuscular = 
   | 'PEITO'
   | 'COSTAS'
   | 'PERNAS'
   | 'OMBRO'
   | 'BRACO'
   | 'ABDOMEN';

export type VolumeTreino = 
   | 'ALTO'
   | 'MEDIO'
   | 'BAIXO';

export type ObjetivoFitness = 
   | 'HIPERTROFIA'
   | 'DEFINICAO'
   | 'EMAGRECIMENTO'
   | 'FORCA';