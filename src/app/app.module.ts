import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from '../routes';

import { AppComponent } from './app.component';
import { NavbarComponent, CardComponent } from '../components';
import { WeatherCityInfoComponent, HomeComponent } from '../views';

import { WeatherService } from '../services';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    WeatherCityInfoComponent
  ],
  providers: [
    WeatherService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
