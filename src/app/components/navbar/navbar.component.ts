import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public userService:UserService,
    private router:Router) { }

  logOut():void {
    this.userService.isLogged = false;
    this.userService.user = undefined;
    localStorage.setItem('currentUser', '');
    this.router.navigate(['home']);
  }
}
