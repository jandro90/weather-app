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
  public dataWeather;

  constructor(private weatherService: WeatherService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({city}) => {
      this.dataHistory = this.weatherService.getHistoryData(city);
      this.dataWeather = this.weatherService.getCityWeather(city);
      console.log(this.dataWeather);
    });
  }

}
