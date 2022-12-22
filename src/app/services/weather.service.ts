import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Creamos la llamada a la API, especificando la URL y mi apiKey:
  apiKey = 'e16ad2de54c440bbf4ea1da0c5bd1ee1';
  URI: string = '';

  constructor(private http: HttpClient) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&units=metric&q=`
  }

  //Creamos el método que nos devolverá la información del tiempo de la ciudad que especifiquemos, a través de una petición a http:
  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }
}
