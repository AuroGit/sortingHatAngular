import { Component } from '@angular/core';
import { BackgroundManagerService } from './services/background-manager.service';
import { ModalMessageService } from './services/modal-message.service';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgURL!:string;
  modalOps:any = false;

  constructor(private bgManager:BackgroundManagerService,
    private modalService:ModalMessageService,
    private userService:UserService) { }

  ngOnInit() {
    this.modalService.modalEvent.subscribe((value) => {
      this.modalOps = value;
    });

    // Persistence
    !localStorage.getItem('currentUser') && localStorage.setItem('currentUser', '');
    if (localStorage.getItem('currentUser')) {
      this.userService.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      this.userService.isLogged = true;
    }
  }

  ngDoCheck() { this.bgURL = this.bgManager.bgURL; }
}