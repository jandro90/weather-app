import { Component, Input } from '@angular/core';

import { IWeatherInfoList } from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() public cityDetail: IWeatherInfoList;
}
