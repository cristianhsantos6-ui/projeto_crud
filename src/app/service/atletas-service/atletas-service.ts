import { Injectable } from '@angular/core';
import { Atleta } from '../../modelos/atleta/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  atletas: Atleta[] = [];

  private apiUrl = 'http://127.0.0.1:8000/pessoa/';

  constructor(private http: HttpClient) {}

  listarAtletas(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(this.apiUrl);
  }

  listarAtleta(idAtleta: number): Observable<Atleta> {
    return this.http.get<Atleta>(
      `${this.apiUrl}${idAtleta}`
    );
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {

    const pessoa = {
      nome: atleta.nome,
      cpf: Number(atleta.cpf),
      data_nascimento: atleta.data_nascimento,
      peso: atleta.peso,
      altura: atleta.altura,
      sexo: atleta.sexo,
      cep: Number(atleta.cep),
      rua_logradouro: atleta.rua_logradouro,
      bairro: atleta.bairro,
      cidade: atleta.cidade,
      uf: atleta.uf
    };

    return this.http.post<Atleta>(
      this.apiUrl,
      pessoa
    );
  }

  excluirAtleta(id: number): Observable<Atleta> {
    return this.http.delete<Atleta>(
      `${this.apiUrl}${id}`
    );
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {

    const pessoa = {
      nome: atleta.nome,
      cpf: Number(atleta.cpf),
      data_nascimento: atleta.data_nascimento,
      peso: atleta.peso,
      altura: atleta.altura,
      sexo: atleta.sexo,
      cep: Number(atleta.cep),
      rua_logradouro: atleta.rua_logradouro,
      bairro: atleta.bairro,
      cidade: atleta.cidade,
      uf: atleta.uf
    };

    return this.http.put<Atleta>(
      `${this.apiUrl}${atleta.id}`,
      pessoa
    );
  }

  calcularIdade(dataNascimento: string): number {

    if (!dataNascimento) {
      return 0;
    }

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade =
      hoje.getFullYear() -
      nascimento.getFullYear();

    const mes =
      hoje.getMonth() -
      nascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 &&
       hoje.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }
}