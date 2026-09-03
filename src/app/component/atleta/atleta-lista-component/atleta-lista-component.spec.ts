import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AtletaService } from '../../../service/atletas-service/atletas-service';
import { Atleta } from '../../../modelos/atleta/atleta';

describe('AtletaService', () => {
  let service: AtletaService;
  let httpMock: HttpTestingController;

  const atletasMock: Atleta[] = [
    {
      id: 1,
      nome: 'João',
      cpf: '12345678910',
      sexo: 'M',
      cep: '49023123',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      dataNascimento: '2000-03-25',
      ruaLogradouro: 'Rua Sei lá das quantas'
    },
    {
      id: 2,
      nome: 'Maria',
      cpf: '11122233302',
      sexo: 'F',
      cep: '49023123',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      dataNascimento: '2010-02-28',
      ruaLogradouro: 'Rua Sei lá das quantas'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AtletaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AtletaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve retornar as pessoas', () => {
    service.listarAtletas().subscribe(atletas => {
      expect(atletas.length).toBe(2);
      expect(atletas[0].nome).toBe('João');
      expect(atletas[1].nome).toBe('Maria');
    });

    const request = httpMock.expectOne('https://6a7f6d92183fdf884b1a61.mockapi.io/esportearlivre/atleta');
    expect(request.request.method).toBe('GET');
    request.flush(atletasMock);
  });

  it('deve editar um atleta', () => {
    const atleta: Atleta = {
      id: 1,
      nome: 'João Souza',
      cpf: '12345678910',
      sexo: 'M',
      cep: '49023123',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      dataNascimento: '2000-03-25',
      ruaLogradouro: 'Rua Sei lá das quantas'
    };

    service.alterarAtleta(atleta).subscribe(atletaEditado => {
      expect(atletaEditado).toEqual(atleta);
    });

    const request = httpMock.expectOne('https://6a7f6d92183fdf884b1a61.mockapi.io/esportearlivre/atleta/1');
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(atleta);
    request.flush(atleta);
  });
});

