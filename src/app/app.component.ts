import { Component } from '@angular/core';

import { WEATHER_CITIES } from '../config/weather.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public citiesList: string[] = WEATHER_CITIES;
}
