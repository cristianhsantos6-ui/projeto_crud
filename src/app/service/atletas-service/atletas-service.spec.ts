import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AtletaService } from './atletas-service';

describe('AtletaService', () => {

  let service: AtletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AtletaService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(AtletaService);
  });

  it('deve calcular a idade corretamente', () => {
    const resultado = service.calcularIdade('1976-05-05');
    expect(resultado).toBe(50);
  });

});

