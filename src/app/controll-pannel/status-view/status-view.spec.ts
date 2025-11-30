import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusView } from './status-view';

describe('StatusView', () => {
  let component: StatusView;
  let fixture: ComponentFixture<StatusView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
