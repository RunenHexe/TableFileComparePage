import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileData} from '../../../interfaces/file-data';

@Component({
  selector: 'app-file-element',
  imports: [],
  templateUrl: './file-element.html',
  styleUrl: './file-element.css',
  standalone: true
})
export class FileElement {
  @Input() file: FileData | null = null;

  @Output() deleteMe: EventEmitter<any> = new EventEmitter();

  removeMe() {
    this.deleteMe.emit()
  }
}
