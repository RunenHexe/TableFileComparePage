import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-status-view',
  imports: [],
  templateUrl: './status-view.html',
  styleUrl: './status-view.css',
  standalone: true
})
export class StatusView implements AfterViewInit{

  @Output() tokenRegex = new EventEmitter<string>();

  tokenRegexDefaultValue: string = "(SC [0-9]{3}.[0-9]{3})|(DF[0-9]{1,})|((RQ[0-9]{1,})(_[0-9a-z]*)*)"

  setTokenRegexTo(value: string) {
   console.log("setTokenRegexTo", value);
   this.tokenRegex.emit(value);
  }

  ngAfterViewInit(): void {
    this.tokenRegex.emit(this.tokenRegexDefaultValue)
  }
}
