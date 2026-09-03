import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Atleta } from '../../../modelos/atleta/atleta';
import { AtletaService } from '../../../service/atletas-service/atletas-service';

@Component({
  selector: 'app-atleta-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css'
})
export class AtletaListaComponent implements OnInit {

  listaAtletas = signal<Atleta[]>([]);

  constructor(
    private listaService: AtletaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.listaService.listarAtletas().subscribe({
      next: (dadosAtletas) => {
        this.listaAtletas.set(
          [...dadosAtletas].sort((a, b) => (a.nome || '').localeCompare(b.nome || ''))
        );
        console.table(this.listaAtletas());
      },
      error: (msgErro) => {
        console.log("Erro ao listar Atletas ", msgErro);
      }
    });
  }

  // MÉTODO PARA CALCULAR A IDADE
  calcularIdade(dataNascimento?: string): number {
    if (!dataNascimento) return 0;

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    
    return idade;
  }

  // Tipagem ajustada para aceitar number ou string
  excluir(id?: number | string): void {
    if (id !== undefined && id !== null && confirm("Deseja Excluir o Atleta?")) {
      this.listaService.excluirAtleta(Number(id)).subscribe({
        next: (resposta) => {
          console.log("Excluído com Sucesso!! ", resposta);
          this.listar();
        },
        error: (msgErro) => {
          console.log("Erro ao excluir Atleta ", msgErro);
        }
      });
    }
  }

  carregaDadosAtletaForm(elem: Atleta): void {
    this.router.navigate(['/atleta', elem.id]);
  }
}

