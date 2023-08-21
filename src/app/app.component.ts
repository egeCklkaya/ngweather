import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngweather';
  ngOnInit() {
    if (environment.production) {
      console.log("production mode");
      console.log(`API Key: ${environment.apiKey}`);
    } else {
      console.log("development mode");
      console.log(`API Key: ${environment.apiKey}`);
    }
  }

}

