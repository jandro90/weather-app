export interface IWatherDataHistory {
  history: History[];
}

interface History {
  weather: Weather[];
  main: Main;
  currentDate: string;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
