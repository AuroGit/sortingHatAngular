import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortingHatAngular';

  API_Url = 'https://hp-api.onrender.com/api/characters/house/';
}
