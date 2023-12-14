import { Component } from '@angular/core';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName:string = this.userService.user.userName;
  userHouse:string = this.userService.user.house;
  houseColor!:string;
  bgURL!:string;

  constructor(public userService:UserService, private bgManager:BackgroundManagerService) { }

  ngOnInit() {
    this.bgManager.changeBgImg('great-hall');
    setTimeout(() => {
      this.bgURL = this.bgManager.bgURL;
    }, 1);

    this.houseColor = `var(--${
      this.userHouse[0]+this.userHouse[this.userHouse.length-1]}-color)`;
  }
}
