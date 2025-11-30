import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleContentElement } from './fle-content-element';

describe('FleContentElement', () => {
  let component: FleContentElement;
  let fixture: ComponentFixture<FleContentElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleContentElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleContentElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
