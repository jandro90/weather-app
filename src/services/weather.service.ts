import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import {
         API_BASE_URL, API_DATA, WEATHER_CITIES,
         API_TEMP_CELSIUS, API_VERSION, API_TYPE,
         API_APP_ID
} from '../config/weather.config';

import { IWeather, IWeatherInfoList, IWatherDataHistory, IWeatherCityInfo } from '../interfaces';

@Injectable()
export class WeatherService {
  private citiesList: string[] = WEATHER_CITIES;

  constructor(private http: HttpClient) {}

  public setWeathersInStorage(): Observable<any> {
    const httpCalls = [];

    this.citiesList.forEach((city: string) => {
      const url = `${API_BASE_URL}/${API_DATA}/${API_VERSION}/${API_TYPE}`;
      const query = `?q=${city}&${API_APP_ID}&${API_TEMP_CELSIUS}`;

      httpCalls.push(
        this.http.get(url + query).map(({weather, main}: IWeather) => {
          localStorage.setItem(city, JSON.stringify({weather, main, name: city}));
          this.saveTempHistory(city, weather, main);
        })
      );
    });

    return Observable.forkJoin(httpCalls);
  }

  private saveTempHistory(city: string, weather: object, main: object) {
    const currentHistory = JSON.parse(localStorage.getItem(`${city}DataHistory`));
    // need convert new date to string, because json parse does not convert the date correctly if it is in Date format
    const currentDate = `${new Date()}`;

    if (!currentHistory) {
      localStorage.setItem(`${city}DataHistory`, JSON.stringify({history: [{weather, main, currentDate}]}));
    } else {

      const newTempData = [...currentHistory.history, {weather, main, currentDate}];
      localStorage.setItem(`${city}DataHistory`, JSON.stringify({history: newTempData}));
    }
  }

  public getWeatherInfoCities(): IWeatherInfoList[] {
    const weatherListInfo = [];

    this.citiesList.forEach((city) => {
      const cityInfo = JSON.parse(localStorage.getItem(city));
      if (cityInfo) { weatherListInfo.push(cityInfo); }
    });

    return weatherListInfo;
  }

  public getHistoryData(city: string): IWatherDataHistory {
    return JSON.parse(localStorage.getItem(`${city}DataHistory`));
  }

  public getCityWeather(city: string): IWeatherCityInfo {
    return JSON.parse(localStorage.getItem(city));
  }
}

