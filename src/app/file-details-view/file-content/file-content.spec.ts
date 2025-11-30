import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileContent } from './file-content';

describe('FileContent', () => {
  let component: FileContent;
  let fixture: ComponentFixture<FileContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
