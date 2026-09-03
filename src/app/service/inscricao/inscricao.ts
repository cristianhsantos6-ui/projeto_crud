import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscricao } from '../../model/inscricao/inscricao';

@Injectable({
  providedIn: 'root'
})
export class CadastroInscricaoService {

  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/inscricao/';

  inscrever(inscricao: Inscricao): Observable<Inscricao> {
    return this.http.post<Inscricao>(this.apiUrl, inscricao);
  }

  listar(): Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(this.apiUrl);
  }
}