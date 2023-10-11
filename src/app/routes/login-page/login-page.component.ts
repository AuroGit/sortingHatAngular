import { Component } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(private apiDataService:ApiDataService) {}

  handleClick(e:Event) {
    e.preventDefault();
    this.apiDataService.getData();
  }
}
