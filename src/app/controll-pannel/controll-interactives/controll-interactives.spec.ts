import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllInteractives } from './controll-interactives';

describe('ControllInteractives', () => {
  let component: ControllInteractives;
  let fixture: ComponentFixture<ControllInteractives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllInteractives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllInteractives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
