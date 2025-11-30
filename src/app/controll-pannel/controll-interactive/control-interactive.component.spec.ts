import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInteractive } from './control-interactive.component';

describe('ControlInteractive', () => {
  let component: ControlInteractive;
  let fixture: ComponentFixture<ControlInteractive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlInteractive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlInteractive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
