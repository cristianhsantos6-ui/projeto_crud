import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AtletaService } from '../../service/atletas-service/atletas-service';
import { Atleta } from '../../modelos/atleta/atleta';

@Component({
  selector: 'app-atleta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css'
})
export class AtletaComponent implements OnInit {
  nome: string = '';
  cpf: number | string = '';
  dataNascimento = '';
  sexo: string = '';
  cep: string = '';
  ruaLogradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';

  idAtleta: number = 0;
  editar: boolean = false;

  listaAtletas: Atleta[] = [];

  constructor(
    public atletaService: AtletaService,
    public http: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarAtletas();
  }

  carregarAtletas(): void {
    this.atletaService.listarAtletas().subscribe({
      next: (dados: Atleta[]) => {
        this.listaAtletas = dados;
      },
      error: (err: any) => console.error('Erro ao listar:', err)
    });
  }

  salvar(): void {
    this.enviarDadosAtleta();
  }

  limparDados(): void {
    this.nome = '';
    this.cpf = '';
    this.dataNascimento = '';
    this.sexo = '';
    this.cep = '';
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
    this.idAtleta = 0;
    this.editar = false;
  }

  carregaDados(idAtleta: number): void {
    this.atletaService.listarAtleta(idAtleta).subscribe({
      next: (dadosAtleta: Atleta) => {
        this.nome = dadosAtleta.nome;
        this.cpf = dadosAtleta.cpf;
        this.dataNascimento = dadosAtleta.dataNascimento;
        this.sexo = dadosAtleta.sexo;
        this.cep = dadosAtleta.cep;
        this.ruaLogradouro = dadosAtleta.ruaLogradouro;
        this.bairro = dadosAtleta.bairro;
        this.cidade = dadosAtleta.cidade;
        this.uf = dadosAtleta.uf || '';
        this.idAtleta = idAtleta;
        this.editar = true;
      },
      error: (msgErro: any) => {
        console.log('ERRO AO LISTAR ATLETA', msgErro);
      }
    });
  }

  enviarDadosAtleta(): void {
    const atleta: Atleta = {
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      sexo: this.sexo,
      cep: this.cep,
      ruaLogradouro: this.ruaLogradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf
    };

    if (this.editar) {
      atleta.id = this.idAtleta;
    }

    this.atletaService.salvarAtleta(atleta).subscribe({
      next: (resposta: Atleta) => {
        console.log(resposta);
        this.carregarAtletas();
        this.limparDados();
      },
      error: (msgErro: any) => {
        console.log(msgErro);
      }
    });
  }

  excluirAtleta(id?: string | number): void {
    if (!id) {
      console.warn('ID do atleta não encontrado.');
      return;
    }

    if (confirm('Deseja realmente excluir este atleta?')) {
      this.atletaService.excluirAtleta(Number(id)).subscribe({
        next: () => this.carregarAtletas(),
        error: (err: unknown) => console.error('Erro ao excluir atleta:', err)
      });
    }
  }
}

