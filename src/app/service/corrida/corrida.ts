import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { corrida } from '../../model/corrida/corrida'; 

@Injectable({
  providedIn: 'root'
})
export class CorridaService {
  private apiUrl = 'http://localhost:3000/corridas'; // Ajuste a URL da sua API se necessário

  constructor(private http: HttpClient) {}

  listar(): Observable<corrida[]> {
    return this.http.get<corrida[]>(this.apiUrl);
  }

  cadastrar(corrida: corrida): Observable<corrida> {
    return this.http.post<corrida>(this.apiUrl, corrida);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

