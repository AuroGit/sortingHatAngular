import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { ModalMessageService } from '../services/modal-message.service';

export const onlyLoggedGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router);
  const userService:UserService = inject(UserService);
  const modalService:ModalMessageService = inject(ModalMessageService);

  if (userService.isLogged) return true;
  
  modalService.modalEvent.emit({show:true, type:'alert'});
  router.navigate(['home']);
  return false;
};
