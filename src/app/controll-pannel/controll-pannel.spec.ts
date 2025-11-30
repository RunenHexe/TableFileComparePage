import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllPannel } from './controll-pannel';

describe('ControllPannel', () => {
  let component: ControllPannel;
  let fixture: ComponentFixture<ControllPannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllPannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllPannel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
