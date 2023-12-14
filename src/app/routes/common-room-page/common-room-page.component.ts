import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { ModalMessageService } from 'src/app/services/modal-message.service';

@Component({
  selector: 'common-room-page',
  templateUrl: './common-room-page.component.html',
  styleUrls: ['./common-room-page.component.css']
})
export class CommonRoomPageComponent {
  house!:string;
  charsArr!:Array<any>;
  fadeClass:string = 'fadein';
  // char!:object|any;
  // loader:boolean = false;

  constructor(
    private readonly route:ActivatedRoute,
    private bgManager:BackgroundManagerService,
    private dataService:ApiDataService,
    private modalService:ModalMessageService
  ) { }

  showChar(char:object|any):void {
    this.modalService.modalEvent.emit({show:true, type:'character', char: char});
  }

  ngOnInit():void {
    // Background
    this.route.params.subscribe(params => {
      this.house = params['house'];
      
      this.bgManager.changeBgImg(this.house ?
        this.house + '-common-room' : 'grand-staircase');
    });

    // API
    this.dataService.getData(this.house).subscribe(
      (data) => {        
        data.forEach((char:object|any) => {
          if (!char.image) {
            char.image = `assets/default-alumns/${char
            .house.toLowerCase()}-${char.gender}-alumn.png`;
          }          
        });
        this.charsArr = Object.values(data);
      }
    );
  }
}
