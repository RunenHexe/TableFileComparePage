import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileContentViewConnector } from './file-content-view-connector';

describe('FileContentViewConnector', () => {
  let component: FileContentViewConnector;
  let fixture: ComponentFixture<FileContentViewConnector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileContentViewConnector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileContentViewConnector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
