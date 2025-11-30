import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ControlPanel} from './controll-pannel/control-panel.component';
import {FileOverview} from './controll-pannel/file-overview/file-overview';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlPanel, FileOverview],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CompareMultipleTableFiles');
}
