import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../_services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.service.getCurrentWeather('Detroit', 'US').subscribe((data) => {
      this.current = data;
    })
  }
}
