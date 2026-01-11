import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FileContent} from '../file-content/file-content';
import {FileDetailViewControl} from '../file-detail-view-control/file-detail-view-control.component';
import {FileData} from '../../interfaces/file-data';
import {SetPrimaryEvent} from './set-primary-event';
import {ExtendedRowInformation} from './extended-row-information';

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
export class FileContentViewConnector implements OnInit, OnChanges{
  @Output() useSelectedColumn = new EventEmitter<string[]>();
  @Output() useAsPrimary = new EventEmitter<SetPrimaryEvent>();
  @Input() file: FileData | null = null;

  @Input() isPrimary: boolean = false;
  @Input() columnsFromPrimary: string[] = [];
  @Input() tokenRegex: string = ""

  columns: string[] = []

  rows: ExtendedRowInformation[] = []
  columnSeparator: string = ";"
  selectedColumn: number = 0
  useColumnNames: boolean = false
  fileDiffSate: string = "equal"

  useTokenRegex: boolean = false

  ngOnInit(): void {
    this.calculateSelectedRows()
    this.calculateColumnNames()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['file'] && this.file != null){
      this.calculateSelectedRows()
      this.calculateColumnNames()
    } else if(this.file == null) {
      this.rows = []
      this.columns = []
    }
    if(changes['columnsFromPrimary'] && changes['columnsFromPrimary'] != null){
      this.calculateSelectedRows()
    }
    if(changes['tokenRegex'] && this.useTokenRegex && this.file != null) {
      this.calculateSelectedRows()
      this.calculateColumnNames()
    }
  }

  calculateSelectedRows() {
    this.fileDiffSate="equal"
    if(this.file != null && this.file.content != null){
      if(this.useTokenRegex) {
        let diffRegex = new RegExp(this.tokenRegex, "g")
        console.log(`calculate tokens with regex ${diffRegex}`)
        let tokens = this.file.content.match(diffRegex)
        console.log(`tokens found ${tokens}`)
        this.rows = []
        if(tokens != null) {
          for(let i = 0; i < tokens.length; i++){
            this.rows.push({row: tokens[i], rowEqualState: this.calculateDiff(i, tokens[i])});
          }
        }
      } else {
        this.rows = []
        let tmpFileData = this.file.content.split("\r\n")
        let startIndexOfRows = this.useColumnNames ? 1 : 0;
        for(let i = startIndexOfRows; i < tmpFileData.length; i++){
          let rowContent = tmpFileData[i].split(this.columnSeparator)[this.selectedColumn];
          this.rows.push({row: rowContent, rowEqualState: this.calculateDiff(i, rowContent)});
        }
      }
    }
  }


  calculateDiff(rowPosition: number, rowContent: string): string {
    let tmpRowPosition = this.useColumnNames ? rowPosition - 1 : rowPosition
    for (let i = 0; i < this.columnsFromPrimary.length; i++) {
      if(rowContent == this.columnsFromPrimary[i]) {
        console.log(`Found Position of element at ${i} for original ${tmpRowPosition}`)
        if(i == tmpRowPosition) {
          return "equal"
        } else {
          if(this.fileDiffSate == "unequal") {
            return "contains"
          } else {
            this.fileDiffSate = "contains"
            return this.fileDiffSate
          }
        }
      }
    }
    this.fileDiffSate = "unequal"
    console.log(`Could't find position for element ${rowContent} with position ${rowPosition}, set FileDiffState to ${this.fileDiffSate}.`)
    return this.fileDiffSate
  }

  calculateColumnNames() {
    if(this.file != null && this.file.content != null) {
      this.columns = []
      let tmpColumnNames = this.file.content.split("\r\n")[0].split(this.columnSeparator);
      if(this.useColumnNames) {
        this.columns = tmpColumnNames
      } else {
        for (let i = 0; i < tmpColumnNames.length; i++) {
          this.columns.push(`${i}`)
        }
      }
    }
  }

  setSelectedColumnTo(columnIndex: number): void {
    this.selectedColumn = columnIndex;
    this.calculateSelectedRows()
    if(this.isPrimary) {
      this.setPrimaryColumns()
    }
  }

  setUseColumnNamesForElement(event: boolean) {
    this.useColumnNames = event;
    this.calculateColumnNames()
    this.calculateSelectedRows()
    if(this.isPrimary) {
      this.setPrimaryColumns()
    }
  }

  changePrimaryFor(event: boolean) {
    let tmpRowData = this.extractRowContent();
    this.useAsPrimary.emit({useAsPrimary: event, selectedColumn: tmpRowData})
  }

  private extractRowContent() {
    let tmpRowData: string[] = []
    for (let i = 0; i < this.rows.length; i++) {
      tmpRowData.push(this.rows[i].row)
    }
    return tmpRowData;
  }

  setPrimaryColumns() {
    let tmpRowData = this.extractRowContent();
    console.log(`Set primary columns to ${tmpRowData}`)
    this.useSelectedColumn.emit(tmpRowData);
  }

  setUseTokenRegex(event: boolean) {
    this.useTokenRegex = event
    this.calculateSelectedRows()
    this.calculateColumnNames()
    if(this.isPrimary) {
      this.setPrimaryColumns()
    }
  }
}
