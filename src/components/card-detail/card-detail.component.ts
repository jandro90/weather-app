import { Component, Input } from '@angular/core';

import { IWeatherCityInfo } from '../../interfaces';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent {
  @Input() public data: IWeatherCityInfo;
}
