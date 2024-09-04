import { Area } from "./area";
import { Cliente } from "./Cliente";
import { Profissional } from "./profissionais";
import { TiposCompromissos } from "./tipos-compromissos";

export interface Compromisso {
  id: number;
  cliente: Cliente;
  area: Area;
  proffisional: Profissional;
  tipo: TiposCompromissos;
  data: Date;
  horarioInicio: string;
  horarioFim: string;
  comentarios: string;
}
