import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AppMeteo';

  //Creamos la propiedad weather, que almacenará los datos/respuesta de manera temporal:
  weather: any;

  //Importamos la clase weatherService:
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }

  //Creamos el método que gestionará la petición al servicio WeatherService, así como el manejo de errores.
  //Para obtener el clima, le pasaremos como parámetro el nombre de la ciudad:
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

  //Creamos el método para enviar la información de la ciudad que se va a buscar, y que nos devuelva sus datos del tiempo:
  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);
      cityName.value = '';
    } else {
      alert('Por favor, introduzca una ciudad')
    }
    cityName.focus();
    return false;
  }
}
