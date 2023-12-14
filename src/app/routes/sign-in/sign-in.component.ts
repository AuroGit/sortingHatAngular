import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { ModalMessageService } from 'src/app/services/modal-message.service';
import { UserService } from 'src/app/services/user.service';
import { passwordMatch } from 'src/app/validators/passwordMatch';
import { newUserMatch } from 'src/app/validators/userMatch';
import { validPassword } from 'src/app/validators/validPassword';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    public userService:UserService, 
    private readonly router:Router,
    private bgManager:BackgroundManagerService,
    private modalService:ModalMessageService
  ) { }
  
  // Validar que el userName no este en Uso
  signInForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,
      Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, [passwordMatch('password', 'confirmPassword'), 
    newUserMatch('userName'), validPassword('password')]);

  registerUser(formData:object|any):void {
    // Signing
    const user = {
      id: Date.now(), userName: formData.userName,
      email: formData.email, password: formData.password,
      house: ''
    };
    this.userService.addUser(user);
    this.signInForm.reset();

    // Logging
    this.userService.user = user;
    this.userService.isLogged = true;

    // Modal
    this.modalService.modalEvent.emit({show:true, type:'signed'});
  }

  ngOnInit() {  
    this.bgManager.changeBgImg('great-hall-entrance');
  }
}
