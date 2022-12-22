import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  //Creamos la llamada a la API:
  // getWeatherData(cityName: string) {
  //   this.http.get(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     .set('units', 'metric')
  //     .set('mode', 'json')
  //   })
  // }
}
