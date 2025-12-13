import {Component} from '@angular/core';
import {FileDetailViewControl} from './file-detail-view-control/file-detail-view-control.component';
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
  primaryFile: FileData | null = null
  columnsFromPrimary: string[] | null = null

  updateList(data: FileData[]) {
    this.fileList = data
  }

  changePrimaryFor(item: FileData, event: boolean, primaryColumns: string[]) {
    if(this.primaryFile == null && event) {
      this.setPrimaryFileAndColumns(item, primaryColumns);
    } else if (!event && this.primaryFile === item && this.fileList.length > 0) {
      this.primaryFile = this.fileList[0]
      console.log(`Set primary file to ${this.primaryFile}`)
    } else if (this.primaryFile != item && event) {
      this.setPrimaryFileAndColumns(item, primaryColumns);
    }
  }

  private setPrimaryFileAndColumns(item: FileData, primaryColumns: string[]) {
    console.log(`Set primary file to ${item}`)
    this.primaryFile = item
    this.columnsFromPrimary = primaryColumns
  }

  setPrimaryColumns(item: FileData, event: string[]) {
    if(this.primaryFile == item) {
      console.log(event)
      this.columnsFromPrimary = event
    }
  }
}
