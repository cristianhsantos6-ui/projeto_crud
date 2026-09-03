import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridasListaComponent } from './corridas-lista';

describe('CorridasListaComponent', () => {
  let component: CorridasListaComponent;
  let fixture: ComponentFixture<CorridasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridasListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridasListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
