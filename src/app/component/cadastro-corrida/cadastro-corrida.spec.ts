import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCorrida } from './cadastro-corrida';

describe('CadastroCorrida', () => {
  let component: CadastroCorrida;
  let fixture: ComponentFixture<CadastroCorrida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCorrida],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroCorrida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
