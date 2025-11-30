import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileData} from '../../interfaces/file-data';
import {FileElement} from './file-element/file-element';

@Component({
  selector: 'app-file-overview',
  imports: [
    FileElement
  ],
  templateUrl: './file-overview.html',
  styleUrl: './file-overview.css',
  standalone: true
})
export class FileOverview {

  @Input() fileList: FileData[] = []
  @Output() deleteItem: EventEmitter<FileData> = new EventEmitter()

  deleteElement(item: FileData) {
    this.deleteItem.emit(item);
  }
}
