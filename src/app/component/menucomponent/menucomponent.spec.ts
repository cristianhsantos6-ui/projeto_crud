import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menucomponent } from './menucomponent';

describe('Menucomponent', () => {
  let component: Menucomponent;
  let fixture: ComponentFixture<Menucomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menucomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Menucomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
