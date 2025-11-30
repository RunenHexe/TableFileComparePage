import { Component } from '@angular/core';
import {FileOverview} from './file-overview/file-overview';
import {StatusView} from './status-view/status-view';
import {ControlInteractives} from './controll-interactives/control-interactives.component';

@Component({
  selector: 'app-control-panel',
  imports: [
    FileOverview, StatusView, ControlInteractives
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
  standalone: true
})
export class ControlPanel {

}
