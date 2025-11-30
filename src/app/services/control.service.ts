import {EventEmitter, Injectable} from '@angular/core';
import {FileData} from '../interfaces/file-data';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  files: FileData[] = []
  fileAddedEvent = new EventEmitter<FileData>();

  addFile(file: FileData) {
    file.uuid = uuidv4()
    this.files.push(file)
    this.fileAddedEvent.emit(file)
  }

  getSubscribeToFileEvent() {
    return this.fileAddedEvent
  }
}
