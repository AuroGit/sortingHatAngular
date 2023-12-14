import { Component } from '@angular/core';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = { userName: '', password: '' };
  errors = { userName: false, password: false };
  showPassword:boolean = false;

  constructor(public userService:UserService,
    private bgManager:BackgroundManagerService) { }

  logUser():void {
    this.errors = { userName: false, password: false };
    if (this.userService.getUsers().length > 0) {
      if (this.model.userName.trim()) {
        if (this.model.password.trim()) {
          let [user] = this.userService.getUsers().filter((user) => {
            return user.userName == this.model.userName;
          });
          // Match Check
          if (user && this.model.password == user.password) {
            this.userService.user = user;
            this.userService.isLogged = true;
            localStorage.setItem('currentUser', JSON.stringify(user));
          } else {
            // Manejar errores de Match
            if (!user) this.errors.userName = true;
            else this.errors.password = true;
          }
        }
      }
    }
  }

  onBlur() {
    if (!this.model.userName.trim()) this.model.userName = '';
  }

  togglePassword():void { this.showPassword = !this.showPassword; }

  ngOnInit() {
    this.bgManager.changeBgImg('hogwarts');
  }
}
