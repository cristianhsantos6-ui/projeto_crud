import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscricao } from '../../model/inscricao/inscricao';

@Injectable({
  providedIn: 'root'
})
export class CadastroInscricaoService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/inscricoes';

  inscrever(inscricao: Inscricao): Observable<Inscricao> {
    return this.http.post<Inscricao>(this.apiUrl, inscricao);
  }

  listar(): Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(this.apiUrl);
  }
}