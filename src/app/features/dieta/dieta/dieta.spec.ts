import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dieta } from './dieta';

describe('Dieta', () => {
  let component: Dieta;
  let fixture: ComponentFixture<Dieta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dieta],
    }).compileComponents();

    fixture = TestBed.createComponent(Dieta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
