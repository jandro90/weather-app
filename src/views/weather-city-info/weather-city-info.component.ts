import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-city-info',
  templateUrl: './weather-city-info.component.html',
  styleUrls: ['./weather-city-info.component.scss'],
})
export class WeatherCityInfoComponent {
  public dataHistory;
  public data;

  constructor(private weatherService: WeatherService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({city}) => {
      this.dataHistory = this.weatherService.getHistoryData(city);
      this.data = this.weatherService.getCityWeather(city);
    });
  }

}
