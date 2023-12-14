import { Component, Input } from '@angular/core';
import { ModalMessageService } from 'src/app/services/modal-message.service';

@Component({
  selector: 'modal-msg',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() type!:string;
  fadeClass:string = 'fadein';
  @Input() char!:object|any;
  loader:boolean = false;

  constructor(private modalService:ModalMessageService) { }

  closeModal() {
    this.fadeClass = 'fadeout'
    setTimeout(() => {
      this.modalService.modalEvent.emit({show:false, type:''});
    }, 500);
  }

  confirm(value:boolean) {
    this.modalService.confirmEvent.emit(value);
    this.closeModal();
  }
}
