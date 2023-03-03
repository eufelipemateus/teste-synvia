import { MaxLength } from 'class-validator';

export class Laudo {
  @MaxLength(8)
  codigo_amostra: string;

  Cocaína: number;
  Anfetamina: number;
  Metanfetamina: number;
  MDA: number;
  MDMA: number;
  THC: number;
  Morfina: number;
  Codeína: number;
  Heroína: number;
  Benzoilecgonina: number;
  Cocaetileno: number;
  Norcocaína: number;
}

export interface RespostaLaudo {
  codigo_amostra: string;
  staatus: Status;
}

export enum Status {
  POSITIVA = 'Positiva',
  NEGATIVA = 'Negativa',
}
