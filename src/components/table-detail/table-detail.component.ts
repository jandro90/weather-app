import { Component, Input } from '@angular/core';

import { IWatherDataHistory } from '../../interfaces';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})

export class TableDetailComponent {
  @Input() public dataHistory: IWatherDataHistory;
}
