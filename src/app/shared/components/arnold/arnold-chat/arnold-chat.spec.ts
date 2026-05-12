import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnoldChat } from './arnold-chat';

describe('ArnoldChat', () => {
  let component: ArnoldChat;
  let fixture: ComponentFixture<ArnoldChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArnoldChat],
    }).compileComponents();

    fixture = TestBed.createComponent(ArnoldChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
