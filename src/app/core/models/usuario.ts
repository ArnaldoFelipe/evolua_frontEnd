export type ClassificacaoImc =
| 'MAGREZA'
| 'NORMAL'
| 'SOBREPESO'
| 'OBESIDADE';


export interface Usuario {
    id:number;
    nome: string;
    email: string;
    peso: number;
    altura: number;
    imc: number;
    classificaoImc: ClassificacaoImc;
    dataNascimento: string;
    idade: number
}
