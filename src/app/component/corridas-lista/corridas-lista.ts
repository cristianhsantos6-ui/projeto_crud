import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorridaService } from '../../service/corrida/corrida';
import { corrida as Corrida } from '../../model/corrida/corrida';

@Component({
  selector: 'app-corridas-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corridas-lista.html',
  styleUrl: './corridas-lista.css'
})
export class CorridasListaComponent implements OnInit {
  corridas: Corrida[] = [];

  private corridaService = inject(CorridaService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.carregarCorridas();
  }

  carregarCorridas(): void {
    this.corridaService.listar().subscribe({
      next: (dados: Corrida[]) => {
        this.corridas = dados;
        console.log('Dados recebidos da API:', dados);
        this.cdr.detectChanges();
      },
      error: (erro: unknown) => {
        console.error('Erro ao buscar corridas:', erro);
      }
    });
  }
}

