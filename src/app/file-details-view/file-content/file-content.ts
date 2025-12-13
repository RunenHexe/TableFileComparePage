import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FileData} from '../../interfaces/file-data';

@Component({
  selector: 'app-file-content',
  imports: [],
  templateUrl: './file-content.html',
  styleUrl: './file-content.css',
  standalone: true
})
export class FileContent implements OnChanges, OnInit{
  @Input() file: FileData | null = null;

  @Input() fileSeparator: string = ";"

  @Input() hasColumnNaming: boolean = false;

  @Input() columnsFromPrimary: string[] | null = null;

  @Output() selectedColumn = new EventEmitter<string[]>();
  @Output() fileDataIsEqual: EventEmitter<boolean> = new EventEmitter<boolean>();

  fileContentLines: string[] = []
  fileContentColumns: string[][] = []

  maxColumns = 0;

  longestColumn: string[] = []

  activeColumn: number = 0

  selectedColumnContent: string[] = []

  localFileContent: String = ''

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['file'] && this.file != null){
      this.localFileContent = this.file.content
      this.fileContentLines = this.localFileContent.split("\r\n")
      for(let i = 0; i < this.fileContentLines.length; i++){
        this.fileContentColumns[i] = this.fileContentLines[i].split(this.fileSeparator)
        if(this.maxColumns < this.fileContentColumns[i].length) {
          this.maxColumns = this.fileContentColumns[i].length
          this.longestColumn = this.fileContentColumns[i]
        }
      }
    }
  }

  ngOnInit(): void {
    if(this.file != null){
      this.localFileContent = this.file.content
      this.fileContentLines = this.localFileContent.split("\r\n")
      for(let i = 0; i < this.fileContentLines.length; i++){
        this.fileContentColumns[i] = this.fileContentLines[i].split(this.fileSeparator)
      }
    }
  }

  changeActiveColumn($index: number) {
    this.activeColumn = $index;
    this.selectedColumnContent = []
    if(this.fileContentLines != null){
      for(let i = 0; i < this.fileContentLines.length; i++){
        if(this.fileContentColumns[i].length > 0) {
          this.selectedColumnContent.push(this.fileContentColumns[i][this.activeColumn])
        }
      }
    }
    if(this.hasColumnNaming) {
      this.selectedColumnContent.reverse().pop()
      this.selectedColumnContent.reverse()
    }
    this.selectedColumn.emit(this.selectedColumnContent)
  }

  checkPrimaryContent(item: string, $index: number): string {
    console.log(`Check for ${item} at position ${$index}`)
    if(this.columnsFromPrimary != null) {
      for(let i = 0; i < this.columnsFromPrimary.length; i++){
        console.log(`Primary column at position ${i} contains ${this.columnsFromPrimary[i]}`)
        if(this.columnsFromPrimary[i] == item) {
          let tmpIndex = this.hasColumnNaming ? $index - 1 : $index;
          if(tmpIndex == i){
            return "exact"
          } else if(tmpIndex != i) {
            return "contains"
          }
        }
      }
    }
    return ""
  }
}
