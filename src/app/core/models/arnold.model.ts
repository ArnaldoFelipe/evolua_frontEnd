import { PlanoTreino } from "./treino.model";
import { PlanoDieta } from "./dieta.model";

export interface ArnoldRequest{
  mensagem: string;
}

export interface ArnoldResponse{
  tipoResposta: TipoRespostaArnold;
  mensagem: string;
  planoTreino?: PlanoTreino;
  planoDieta?: PlanoDieta;
}

export type TipoRespostaArnold =
   | 'CHAT'
   | 'CRIAR_TREINO'
   | 'CRIAR_DIETA'; 
 
