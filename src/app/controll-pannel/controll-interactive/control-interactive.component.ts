import {Component, EventEmitter, Output} from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import {FileData} from '../../interfaces/file-data';

@Component({
  selector: 'app-control-interactive',
  imports: [],
  templateUrl: './control-interactive.component.html',
  styleUrl: './control-interactive.component.css',
  standalone: true
})
export class ControlInteractive {
  constructor() {
  }

  tmpFileList: FileList | null = null;
  @Output() uploadedFile: EventEmitter<FileData> = new EventEmitter();

  onFileUpload() {
    if( this.tmpFileList != null) {
      for (let i = 0; i < this.tmpFileList.length; i++) {
        let fileReader = new FileReader();
        let fileName: string = "";
        fileReader.onloadend = () => {
          let data = fileReader.result;
          if( typeof data === "string" ) {
            this.uploadedFile.emit({name: fileName, content: data, uuid: uuidv4()})
          } else {
            console.error(`Datatype don't match used type string, datatype is ${typeof data}`);
          }
        }
        let element = this.tmpFileList[i];
        fileName = this.tmpFileList[i].name;
        fileReader.readAsText(element)
      }
    }
  }

  onFileSelect($event: Event) {
    if($event != null && $event.target != null) {
      this.tmpFileList = (<HTMLInputElement>$event.target).files
    }
  }
}
