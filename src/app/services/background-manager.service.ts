import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundManagerService {
  defaultBgImg:string = 'hogwarts';
  bgURL:string = `url(assets/backgrounds/${this.defaultBgImg}.webp)`;
  bgTransitionClass:string = 'fade-in';

  constructor() { }

  changeBgImg(newBgImg:string):void {    
      this.bgURL = `url(assets/backgrounds/${newBgImg}.webp)`;
  }
}
