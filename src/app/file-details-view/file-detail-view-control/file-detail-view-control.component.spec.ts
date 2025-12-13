import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDetailViewControl } from './file-detail-view-control.component';

describe('FileDetailViewControll', () => {
  let component: FileDetailViewControl;
  let fixture: ComponentFixture<FileDetailViewControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDetailViewControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDetailViewControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
