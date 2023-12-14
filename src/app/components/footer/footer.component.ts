import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  show:boolean = false;

  toggleFooter():void {
    if (this.show) {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
      setTimeout(() => this.show = !this.show, 500);
    } else {
      this.show = !this.show;
      setTimeout(() => {
        window.scroll({ 
          top: window.innerHeight + window.scrollY, 
          left: 0, 
          behavior: 'smooth' 
        });
      }, 1);
    }
  }
}
