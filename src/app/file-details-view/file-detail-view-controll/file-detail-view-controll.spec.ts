import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDetailViewControll } from './file-detail-view-controll';

describe('FileDetailViewControll', () => {
  let component: FileDetailViewControll;
  let fixture: ComponentFixture<FileDetailViewControll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDetailViewControll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDetailViewControll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
