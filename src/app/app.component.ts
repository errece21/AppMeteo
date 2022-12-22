import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'AppMeteo';
  
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res
        },
        err => console.log(err)
      )
  }

  submitLocation(cityName: HTMLInputElement) {
    if(cityName.value) {
      this.getWeather(cityName.value);
      cityName.value = '';
    } else {
      alert('Por favor, introduzca una ciudad')
    }
      cityName.focus();
      return false;
  }
}
