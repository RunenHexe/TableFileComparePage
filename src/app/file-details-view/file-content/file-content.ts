import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExtendedRowInformation} from '../file-content-view-connector/extended-row-information';

@Component({
  selector: 'app-file-content',
  imports: [],
  templateUrl: './file-content.html',
  styleUrl: './file-content.css',
  standalone: true
})
export class FileContent{

  @Input() columns: string[] = [];
  @Input() rows: ExtendedRowInformation[] = [];

  @Output() changeSelectedColumn = new EventEmitter<number>();

  changeActiveColumn(index: number) {
    this.changeSelectedColumn.emit(index)
  }
}
