import { Component, signal } from '@angular/core';
import {ControlPanel} from './controll-pannel/control-panel.component';
import {FileDetailsView} from './file-details-view/file-details-view';

@Component({
  selector: 'app-root',
  imports: [ControlPanel, FileDetailsView],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CompareMultipleTableFiles');
}
