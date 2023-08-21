import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  //current
  weatherData: any;
  city: string = 'Antalya';
  country: string = '';
  date: string = '';
  localtime: string = '';
  humidity: number = 0;
  wind: number = 0;
  temp: number = 0;
  currenticon: string = '';
  //hour
  hour0: string = '';
  hour1: string = '';
  hour2: string = '';
  hour3: string = '';
  hour4: string = '';
  houricon0: string = '';
  houricon1: string = '';
  houricon2: string = '';
  houricon3: string = '';
  houricon4: string = '';
  //forecast
  forecastday0: string = '';
  forecastday1: string = '';
  forecastday2: string = '';
  forecastday3: string = '';
  forecastday4: string = '';
  forecastday5: string = '';
  forecastday6: string = '';
  forecastdate0: string = '';
  forecastdate1: string = '';
  forecastdate2: string = '';
  forecastdate3: string = '';
  forecastdate4: string = '';
  forecastdate5: string = '';
  forecastdate6: string = '';
  forecasticon0: string = '';
  forecasticon1: string = '';
  forecasticon2: string = '';
  forecasticon3: string = '';
  forecasticon4: string = '';
  forecasticon5: string = '';
  forecasticon6: string = '';

  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.city);
    this.city = '';
  }
  onSubmit()  {
    this.getWeather(this.city);
    this.city = '';
  }
  keepOriginalOrder(a:any, b:any){
    return a.key;
  }

  getWeather(city: string) {
    this.WeatherService.getweather(city).subscribe({

      next: (response) => {
        console.log(response);
        //current
        this.weatherData = response;
        this.city = this.weatherData.location.name;
        this.country = this.weatherData.location.country;
        this.localtime = this.weatherData.location.localtime;
        this.temp = this.weatherData.current.temp_c;
        this.humidity = this.weatherData.current;
        this.wind = this.weatherData.current;
        this.currenticon = this.weatherData.current.condition.icon;
        //hour
        this.forecastday0 = this.weatherData.forecast.forecastday[0].day;
        this.forecastday1 = this.weatherData.forecast.forecastday[1].day;
        this.forecastday2 = this.weatherData.forecast.forecastday[2].day;
        this.forecastday3 = this.weatherData.forecast.forecastday[3].day;
        this.forecastday4 = this.weatherData.forecast.forecastday[4].day;
        this.forecastday5 = this.weatherData.forecast.forecastday[5].day;
        this.forecastday6 = this.weatherData.forecast.forecastday[6].day;
        this.forecastdate0 = this.weatherData.forecast.forecastday[0];
        this.forecastdate1 = this.weatherData.forecast.forecastday[1];
        this.forecastdate2 = this.weatherData.forecast.forecastday[2];
        this.forecastdate3 = this.weatherData.forecast.forecastday[3];
        this.forecastdate4 = this.weatherData.forecast.forecastday[4];
        this.forecastdate5 = this.weatherData.forecast.forecastday[5];
        this.forecastdate6 = this.weatherData.forecast.forecastday[6];
        this.forecasticon0 = this.weatherData.forecast.forecastday[0].day.condition.icon;
        this.forecasticon1 = this.weatherData.forecast.forecastday[1].day.condition.icon;
        this.forecasticon2 = this.weatherData.forecast.forecastday[2].day.condition.icon;
        this.forecasticon3 = this.weatherData.forecast.forecastday[3].day.condition.icon;
        this.forecasticon4 = this.weatherData.forecast.forecastday[4].day.condition.icon;
        this.forecasticon5 = this.weatherData.forecast.forecastday[5].day.condition.icon;
        this.forecasticon6 = this.weatherData.forecast.forecastday[6].day.condition.icon;
        //forecast
        this.hour0 = this.weatherData.forecast.forecastday[0].hour[7];
        this.hour1 = this.weatherData.forecast.forecastday[0].hour[11];
        this.hour2 = this.weatherData.forecast.forecastday[0].hour[15];
        this.hour3 = this.weatherData.forecast.forecastday[0].hour[19];
        this.hour4 = this.weatherData.forecast.forecastday[0].hour[23];
        this.houricon0 = this.weatherData.forecast.forecastday[0].hour[7].condition.icon;
        this.houricon1 = this.weatherData.forecast.forecastday[0].hour[11].condition.icon;
        this.houricon2 = this.weatherData.forecast.forecastday[0].hour[15].condition.icon;
        this.houricon3 = this.weatherData.forecast.forecastday[0].hour[19].condition.icon;
        this.houricon4 = this.weatherData.forecast.forecastday[0].hour[23].condition.icon;

      },
    })
  }
}
