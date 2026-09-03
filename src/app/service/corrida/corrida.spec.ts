import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaService } from './corrida';

describe('Corrida', () => {
  let component: CorridaService;
  let fixture: ComponentFixture<CorridaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaService],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
