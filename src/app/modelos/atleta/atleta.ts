export interface Atleta {
  id?: number | string;
  idAtleta?: number;
  nome: string;
  cpf: string | number;
  dataNascimento: string;
  sexo: string;
  cep: string;
  ruaLogradouro: string;
  bairro: string;
  cidade: string;
  uf?: string;
}

