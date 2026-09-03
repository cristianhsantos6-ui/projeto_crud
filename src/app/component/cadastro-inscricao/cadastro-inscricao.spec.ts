import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInscricaoService } from '../../service/inscricao/inscricao'; 

describe('CadastroInscricaoService', () => {
  let component: CadastroInscricaoService;
  let fixture: ComponentFixture<CadastroInscricaoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroInscricaoService],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroInscricaoService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
