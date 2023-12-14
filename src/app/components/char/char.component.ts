import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'char-component',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent {
  @Input() char!:object|any;
  borderColor!:string;

  constructor(public userService:UserService) { }

  ngOnInit() {
    let house:string = this.char.house.toLowerCase();
    this.borderColor = `var(--${
      house[0]+house[house.length-1]
    }-color)`;
  }
}
