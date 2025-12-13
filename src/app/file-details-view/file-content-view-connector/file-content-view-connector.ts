import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileContent} from '../file-content/file-content';
import {FileDetailViewControl} from '../file-detail-view-control/file-detail-view-control.component';
import {FileData} from '../../interfaces/file-data';
import {SetPrimaryEvent} from './set-primary-event';

@Component({
  selector: 'app-file-content-view-connector',
  imports: [
    FileContent,
    FileDetailViewControl
  ],
  templateUrl: './file-content-view-connector.html',
  styleUrl: './file-content-view-connector.css',
  standalone: true
})
export class FileContentViewConnector {
  @Output() useSelectedColumn = new EventEmitter<string[]>();
  @Output() useAsPrimary = new EventEmitter<SetPrimaryEvent>();
  @Input() file: FileData | null = null;

  useColumnNames: boolean = false
  selectedColumns: string [] = []
  @Input() isPrimary: boolean = false;
  @Input() columnsFromPrimary: string[] | null  = null;

  setUseColumnNamesForElement(event: boolean) {
    this.useColumnNames = event;
  }

  changePrimaryFor(event: boolean) {
    this.useAsPrimary.emit({useAsPrimary: event, selectedColumn: this.selectedColumns})
  }

  setPrimaryColumns(event: string[]) {
    this.useSelectedColumn.emit(event);
  }
}
