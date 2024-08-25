import { Pessoa } from "./Pessoa";

export interface Cliente extends Pessoa {
  dataNascimento: string;
}
