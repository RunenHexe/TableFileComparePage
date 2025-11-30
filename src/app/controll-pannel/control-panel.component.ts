import {Component, EventEmitter, Output} from '@angular/core';
import {FileOverview} from './file-overview/file-overview';
import {StatusView} from './status-view/status-view';
import {ControlInteractive} from './controll-interactive/control-interactive.component';
import {FileData} from '../interfaces/file-data';

@Component({
  selector: 'app-control-panel',
  imports: [
    FileOverview, StatusView, ControlInteractive
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
  standalone: true
})
export class ControlPanel {

  protected readonly FileOverview = FileOverview;

  fileList: FileData[] = []

  @Output() fileListUpdate: EventEmitter<FileData[]> = new EventEmitter();

  addFile($event: FileData) {
    this.fileList.push($event);
    this.fileListUpdate.emit(this.fileList)
  }

  deleteItem(item: FileData) {
    if(this.fileList.length > 0) {
      let tmp: FileData[] = []
      for(let i = 0; i < this.fileList.length; i++) {
        if(!(this.fileList[i].uuid === item.uuid)) {
          tmp.push(this.fileList[i]);
        }
      }
      this.fileList = tmp
    }
    this.fileListUpdate.emit(this.fileList);
  }
}
