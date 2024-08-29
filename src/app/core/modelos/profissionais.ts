import { Pessoa } from "./Pessoa";

export interface Profissional extends Pessoa {
  ativo: boolean;
}
