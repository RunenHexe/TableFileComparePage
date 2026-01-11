import {
  Component, EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-file-detail-view-control',
  imports: [
  ],
  templateUrl: './file-detail-view-control.component.html',
  styleUrl: './file-detail-view-control.component.css',
  standalone: true
})
export class FileDetailViewControl{

  fileSeparator: string = ";"

  @Output() primaryChange = new EventEmitter<boolean>();
  @Output() useColumnNames = new EventEmitter<boolean>();
  @Output() useTokenRegex = new EventEmitter<boolean>();

  @Input() isPrimary: boolean = false;

  @Input() isEqualToPrimary: boolean = true
  @Input() fileUuid: string | undefined = "";
  @Input() fileDiffState: string = "equal";
  @Input() fileName: string = "";

  useTokens: boolean = false

  changeSeparator(event: string) {
    this.fileSeparator = event
  }

  setToComparedFile() {
    console.log(`This file is Primary ${this.isPrimary}`)
    let isPrimary = !this.isPrimary
    this.primaryChange.emit(isPrimary)
  }

  setColumnNames(event: Event) {
    this.useColumnNames.emit((<HTMLInputElement>event.target).checked)
  }

  setTokenSanitizer(event: Event) {
    this.useTokens = (<HTMLInputElement>event.target).checked
    this.useTokenRegex.emit(this.useTokens)
  }
}
