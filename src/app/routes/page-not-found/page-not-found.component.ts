import { Component } from '@angular/core';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  constructor(private bgManager:BackgroundManagerService) { }

  ngOnInit() {
    this.bgManager.changeBgImg('forbidden-forest');
  }
}
