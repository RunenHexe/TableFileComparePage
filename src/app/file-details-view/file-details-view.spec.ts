import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDetailsView } from './file-details-view';

describe('FileDetailsView', () => {
  let component: FileDetailsView;
  let fixture: ComponentFixture<FileDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDetailsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDetailsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
