import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnesdkBiometricsComponent } from './onesdk-biometrics/onesdk-biometrics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnesdkBiometricsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-onesdk';
}
