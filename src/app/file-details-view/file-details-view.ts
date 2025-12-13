import {Component} from '@angular/core';
import {FileData} from '../interfaces/file-data';
import {FileContentViewConnector} from './file-content-view-connector/file-content-view-connector';

@Component({
  selector: 'app-file-details-view',
  imports: [
    FileContentViewConnector
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

  changePrimaryTo(item: FileData, event: boolean, primaryColumns: string[]) {
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
