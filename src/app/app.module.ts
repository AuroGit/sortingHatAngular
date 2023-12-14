import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
  import { LoginComponent } from './components/login/login.component';
  import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';
  import { PasswordComponent } from './components/password/password.component';
import { QuizPageComponent } from './routes/quiz-page/quiz-page.component';
import { CommonRoomPageComponent } from './routes/common-room-page/common-room-page.component';
  import { CharComponent } from './components/char/char.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ModalComponent } from './components/modal/modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatorPipe } from './pipes/translator.pipe';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuizPageComponent,
    CommonRoomPageComponent,
    SignInComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DashboardComponent,
    PasswordComponent,
    TranslatorPipe,
    CharComponent,
    ModalComponent,
    BurgerMenuComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
