import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CadastroInscricaoService } from './inscricao'; 

describe('InscricaoService', () => {
  let service: CadastroInscricaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CadastroInscricaoService,
        provideHttpClient()
      ]
    });
    service = TestBed.inject(CadastroInscricaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

