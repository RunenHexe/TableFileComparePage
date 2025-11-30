import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ControlPanel} from './controll-pannel/control-panel.component';
import {FileDetailsView} from './file-details-view/file-details-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlPanel, FileDetailsView],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CompareMultipleTableFiles');
}
