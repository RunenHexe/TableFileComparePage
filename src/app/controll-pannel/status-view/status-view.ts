import { Component } from '@angular/core';

@Component({
  selector: 'app-status-view',
  imports: [],
  templateUrl: './status-view.html',
  styleUrl: './status-view.css',
  standalone: true
})
export class StatusView {
  statusEqual: boolean = false;

  getStatusEqual() {
    return this.statusEqual
  }

  changeStatus() {
    this.statusEqual = !this.statusEqual;
  }
}
