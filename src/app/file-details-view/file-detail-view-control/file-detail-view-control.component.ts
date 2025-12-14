import {
  Component, EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-file-detail-view-control',
  imports: [],
  templateUrl: './file-detail-view-control.component.html',
  styleUrl: './file-detail-view-control.component.css',
  standalone: true
})
export class FileDetailViewControl implements OnChanges{

  fileSeparator: string = ";"

  @Output() primaryChange = new EventEmitter<boolean>();
  @Output() useColumnNames = new EventEmitter<boolean>();

  @Input() isPrimary: boolean = false;

  @Input() isEqualToPrimary: boolean = true
  @Input() fileUuid: string | undefined = "";
  @Input() fileDiffState: string = "equal";

  changeSeparator(event: string) {
    this.fileSeparator = event
  }

  setToComparedFile() {
    console.log(`This file is Primary ${this.isPrimary}`)
    let isPrimary = !this.isPrimary
    this.primaryChange.emit(isPrimary)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isPrimary = changes['isPrimary'].currentValue
    console.log(`I'm Primary ${this.isPrimary}`)
  }

  setColumnNames(event: Event) {
    this.useColumnNames.emit((<HTMLInputElement>event.target).checked)
  }
}
