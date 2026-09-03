import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroInscricaoService } from '../../service/inscricao/inscricao'; 
import { CorridaService } from '../../service/corrida/corrida';
import { corrida as Corrida } from '../../model/corrida/corrida';
import { Inscricao } from '../../model/inscricao/inscricao'; 

@Component({
  selector: 'app-cadastro-inscricao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-inscricao.html',
  styleUrls: ['./cadastro-inscricao.css']
})
export class CadastroInscricaoComponent implements OnInit {
  private inscricaoService = inject(CadastroInscricaoService);
  private corridaService = inject(CorridaService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  corridas: Corrida[] = [];

  inscricao: Inscricao = {
    corridaId: '',
    nomeAtleta: '',
    cpf: '',
    sexo: '',
    dataInscricao: new Date().toISOString().split('T')[0]
  };

  ngOnInit(): void {
    this.corridaService.listar().subscribe({
      next: (dados: Corrida[]) => {
        this.corridas = dados;
        this.cdr.detectChanges();
      },
      error: (err: unknown) => console.error('Erro ao carregar corridas:', err)
    });
  }

  salvarInscricao(): void {
    this.inscricaoService.inscrever(this.inscricao).subscribe({
      next: () => {
        alert('Inscrição realizada com sucesso!');
        this.router.navigate(['/corridas']);
      },
      error: (err: unknown) => console.error('Erro ao salvar inscrição:', err)
    });
  }
}

