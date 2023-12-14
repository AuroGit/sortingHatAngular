import { Component } from '@angular/core';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  bgURL!:string;

  constructor(public userService:UserService,
    private bgManager:BackgroundManagerService) { }

  ngDoCheck() {
    this.bgURL = this.bgManager.bgURL;
  }
}
