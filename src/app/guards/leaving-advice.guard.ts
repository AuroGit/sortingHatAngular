import { CanDeactivateFn } from '@angular/router';
import { SignInComponent } from '../routes/sign-in/sign-in.component';
import { QuizPageComponent } from '../routes/quiz-page/quiz-page.component';
import { ModalMessageService } from '../services/modal-message.service';
import { inject } from '@angular/core';

export const leavingAdviceGuard: CanDeactivateFn<SignInComponent | QuizPageComponent | any> =  (
  component, currentRoute, currentState, nextState) => {
  const modalService:ModalMessageService = inject(ModalMessageService);
  if (currentRoute.url[0].path == 'sign-in') {
    if (component.signInForm.dirty) {
      modalService.modalEvent.emit({show:true, type:'confirm'});
      
      return modalService.confirmEvent;
    }
  } else if (currentRoute.url[0].path == 'quiz') {
    if (component.quizScore.length > 0 && 
      !(component.quizState > component.questionsArr.length)) {
      modalService.modalEvent.emit({show:true, type:'confirm'});
      
      return modalService.confirmEvent;
    }
  }
  return true;
};
