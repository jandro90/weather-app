import { Component } from '@angular/core';

import { WeatherService } from '../../services';

import { UPDATE_TIME } from '../../config/weather.config';

import { IWeatherInfoList } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public cityWeathersInfoList: IWeatherInfoList[] = [];

  constructor(private weatherService: WeatherService) {
    this.checkIsFirstTime();
    this.updateWeatherData();
  }

  private checkIsFirstTime() {
    if (!JSON.parse(localStorage.getItem('isFirstTime'))) {
      this.initialApp();
    } else {
      this.cityWeathersInfoList = this.weatherService.getWeatherInfoCities();
    }
  }

  private initialApp() {
    localStorage.setItem('isFirstTime', JSON.stringify(true));
    this.refreshData();
  }

  private refreshData() {
    this.weatherService.setWeathersInStorage().subscribe(() => {
      this.cityWeathersInfoList = this.weatherService.getWeatherInfoCities();
    });
  }

  private updateWeatherData() {
    setInterval(() => {
      this.refreshData();
    }, (UPDATE_TIME) );
  }
}
