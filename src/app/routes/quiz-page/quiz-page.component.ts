import { Component } from '@angular/core';
import { BackgroundManagerService } from 'src/app/services/background-manager.service';
import { UserService } from 'src/app/services/user.service';
import sortingQuiz from 'src/assets/sorting-quiz.json';

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  questionsArr:any = sortingQuiz;
  quizState:number = 0;
  quizScore:Array<object|any> = [];
  currentAnswer:string = '';
  house!:string;
  fadeClass:string = 'fadein';
  resultColor!:string;

  constructor(public userService:UserService,
    private bgManager:BackgroundManagerService) { }

  setAnswer(e:any):void {
    this.currentAnswer = e.target.value;
  }
  
  nextStep():void {
    if (this.quizState > 0) {
      this.quizScore.push({
        id: this.quizState,
        value: JSON.parse(this.currentAnswer)
      });
      this.fadeClass = 'fadeout';
    }
    setTimeout(() => {
      this.quizState ++;
      this.fadeClass = 'fadein';
      this.quizState > this.questionsArr.length && this.sortingResult();
      this.currentAnswer = '';
    },500);
  }

  sortingResult():void {  
    // Calculo de Resultado
    let score = [{h:'gryffindor', pt:0}, {h:'slytherin', pt:0},
      {h:'ravenclaw', pt:0}, {h:'hufflepuff', pt:0}];
    this.quizScore.forEach(elem => {
      score[0].pt += elem.value.g; score[1].pt += elem.value.s;
      score[2].pt += elem.value.r; score[3].pt += elem.value.h;
    });
    let finalScore = score.sort((a, b) => b.pt - a.pt);

    this.house = finalScore[0].h;
    this.userService.user.house = this.house;
    this.userService.setUser(this.userService.user);
    this.resultColor = `var(--${
      this.house[0]+this.house[this.house.length-1]}-color)`;    
  }

  ngOnInit() {
    this.bgManager.changeBgImg('sorting-ceremony');
  }
}
