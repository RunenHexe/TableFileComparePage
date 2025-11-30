import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOverview } from './file-overview';

describe('FileOverview', () => {
  let component: FileOverview;
  let fixture: ComponentFixture<FileOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
