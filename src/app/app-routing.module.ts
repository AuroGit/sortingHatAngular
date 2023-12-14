import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';
import { QuizPageComponent } from './routes/quiz-page/quiz-page.component';
import { CommonRoomPageComponent } from './routes/common-room-page/common-room-page.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { onlyLoggedGuard } from './guards/only-logged.guard';
import { leavingAdviceGuard } from './guards/leaving-advice.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  }, {
    path: 'sign-in',
    component: SignInComponent,
    canDeactivate: [leavingAdviceGuard]
  }, {
    path: 'quiz',
    component: QuizPageComponent,
    canActivate: [onlyLoggedGuard],
    canDeactivate: [leavingAdviceGuard]
  }, {
    path: 'common-room',
    component: CommonRoomPageComponent,
    canActivate: [onlyLoggedGuard]
  }, {
    path: 'common-room/:house',
    component: CommonRoomPageComponent,
    canActivate: [onlyLoggedGuard]
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
