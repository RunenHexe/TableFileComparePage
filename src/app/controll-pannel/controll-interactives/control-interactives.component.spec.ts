import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInteractives } from './control-interactives.component';

describe('ControllInteractives', () => {
  let component: ControlInteractives;
  let fixture: ComponentFixture<ControlInteractives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlInteractives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlInteractives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
