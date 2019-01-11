import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routes';

import { AppComponent } from './app.component';
import { NavbarComponent, CardComponent } from '../components';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
