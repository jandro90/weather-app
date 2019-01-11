import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, WeatherCityInfoComponent} from '../views';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'weather/:city', component: WeatherCityInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    HomeComponent,
    WeatherCityInfoComponent
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class RoutingModule {}
