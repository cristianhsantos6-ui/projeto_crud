export interface Atleta {
  id?: number | string;
  idAtleta?: number;

  nome: string;
  cpf: string | number;
  data_nascimento: string;

  peso: number;
  altura: number;

  sexo: string;

  cep: string | number;
  rua_logradouro: string;
  bairro: string;
  cidade: string;
  uf?: string;
}