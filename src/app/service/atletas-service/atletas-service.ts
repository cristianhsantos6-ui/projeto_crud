import { Injectable } from '@angular/core';
import { Atleta } from '../../modelos/atleta/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  atletas: Atleta[] = [];

  constructor(private http: HttpClient) {}

  listarAtletas(): Observable<Atleta[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;
    return this.http.get<Atleta[]>(urlApi);
  }

  listarAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
    return this.http.get<Atleta>(urlApi)
  }


  salvarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;
    return this.http.post<Atleta>(urlApi, atleta);
  }

  excluirAtleta(id: number): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${id}`;
    return this.http.delete<Atleta>(urlApi);
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`;
    return this.http.put<Atleta>(urlApi, atleta);
  }

//FUNÇÃO PARA CONVERTER PARA IDADE
calcularIdade (dataNascimento: string)  {
  if (!dataNascimento) return 0;

 const nascimento = new Date(dataNascimento);
 const hoje = new Date ();

 let idade = hoje.getFullYear() - nascimento.getFullYear();
 const mes = hoje.getMonth() - nascimento.getMonth();

 if (mes < 0 || (mes === 0 && hoje.getDate () <
 nascimento.getDate ())) {
   idade--;
 }
 return idade;
}



}

