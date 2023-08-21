import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getweather(city: string) {
    return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=f8ca27a383614201b7e120551231708&q=' + city + '&days=7&aqi=no&alerts=no');
  }

  
  



  
}
