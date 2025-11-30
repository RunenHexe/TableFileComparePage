import { Component } from '@angular/core';
import {FileOverview} from './file-overview/file-overview';
import {StatusView} from './status-view/status-view';
import {ControlInteractive} from './controll-interactives/control-interactives.component';

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
}
