import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';




import { ViewAllFormsComponent } from './session/view-all-forms/view-all-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewAllFormsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-forms';
}
