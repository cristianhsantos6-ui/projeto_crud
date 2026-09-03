import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CorridaService } from '../../service/corrida/corrida';
import { corrida as Corrida } from '../../model/corrida/corrida';

@Component({
  selector: 'app-cadastro-corrida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-corrida.html', // <-- CORRIGIDO AQUI (estava corridas-lista.html)
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida { // <-- Certifique-se de que tem o 'export' aqui
  corrida: Corrida = {

    nome: '',
    cpf: '',
    descricao: '',
    data: '',
    distancia: 0
  };

  constructor(
    private corridaService: CorridaService,
    private router: Router
  ) {}

  cadastrar(): void {
    this.corridaService.cadastrar(this.corrida).subscribe({
      next: () => {
        alert('Corrida cadastrada com sucesso!');
        this.router.navigate(['/corridas']);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar corrida:', err);
        alert('Erro ao cadastrar corrida!');
      }
    });
  }
}

