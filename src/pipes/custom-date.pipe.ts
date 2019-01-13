import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string): any {
    const date = new Date(value);

    const day = this.checkCorrectFormat(date.getDate());
    const month = this.checkCorrectFormat(date.getMonth() + 1);
    const year = this.checkCorrectFormat(date.getFullYear());
    const hour = this.checkCorrectFormat(date.getHours());
    const minute = this.checkCorrectFormat(date.getMinutes());

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }

  checkCorrectFormat(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
