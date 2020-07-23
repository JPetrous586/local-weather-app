import { IWeatherService } from './weather.service';
import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../Interfaces';

export const fakeWeather= {
  city: 'Bethesda',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle'
};

export class WeatherServiceFake implements IWeatherService{
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather);
  }
}
