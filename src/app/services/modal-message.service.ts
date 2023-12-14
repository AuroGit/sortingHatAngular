import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMessageService {
  modalEvent = new EventEmitter<any>();
  confirmEvent = new EventEmitter<boolean>();

  constructor() { }

}
