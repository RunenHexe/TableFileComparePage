import {ApplicationRef, Component} from '@angular/core';
import {ControlService} from '../../services/control.service';
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
  constructor(private controlService: ControlService, private appRef: ApplicationRef) {
    controlService.getSubscribeToFileEvent().subscribe((data) => {
      console.log(`Got ${data}`);
      console.log(this.fileList.length)
      let files: FileData[] = []
      for(let i = 0; i < this.fileList.length; i++) {
        files.push(this.fileList[i]);
      }
      files.push(data)
      this.fileList = files
      console.log(this.fileList.length)
      appRef.tick()
    })
  }

  fileList: FileData[] = []

  addFile(file: FileData) {
    this.fileList.push(file)
  }

  deleteElement(item: FileData) {
    if(this.fileList.length > 0) {
      let tmp: FileData[] = []
      for(let i = 0; i < this.fileList.length; i++) {
        if(!(this.fileList[i].uuid === item.uuid)) {
          tmp.push(this.fileList[i]);
        }
      }
      this.fileList = tmp
    }
  }
}
