import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherService } from '../../services/weather.service';

import { UPDATE_TIME } from '../../config/weather.config';

import { IWatherDataHistory, IWeatherCityInfo } from '../../interfaces';

@Component({
  selector: 'app-weather-city-info',
  templateUrl: './weather-city-info.component.html',
  styleUrls: ['./weather-city-info.component.scss'],
})

export class WeatherCityInfoComponent implements OnInit {
  public dataHistory: IWatherDataHistory;
  public dataWeather: IWeatherCityInfo;
  private city: string;

  constructor(private weatherService: WeatherService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({city}) => {
      this.city = city;
      this.getData();
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.getData();
    }, (UPDATE_TIME));
  }

  getData() {
    this.dataHistory = this.weatherService.getHistoryData(this.city);
    this.dataWeather = this.weatherService.getCityWeather(this.city);
  }

  refreshData() {
    this.getData();
  }

}
