import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treino } from './treino';

describe('Treino', () => {
  let component: Treino;
  let fixture: ComponentFixture<Treino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treino],
    }).compileComponents();

    fixture = TestBed.createComponent(Treino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
