import {Component} from '@angular/core';
import {FileDetailViewControl} from './file-detail-view-controll/file-detail-view-control.component';
import {FileContent} from './file-content/file-content';
import {FileData} from '../interfaces/file-data';

@Component({
  selector: 'app-file-details-view',
  imports: [
    FileDetailViewControl,
    FileContent
  ],
  templateUrl: './file-details-view.html',
  styleUrl: './file-details-view.css',
  standalone: true
})
export class FileDetailsView {
  fileList: FileData[] = []

  updateList(data: FileData[]) {
    this.fileList = data
  }
}
