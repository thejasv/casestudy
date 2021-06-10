import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
import { StartupComponent } from './startup/startup.component';
import { HomeComponent } from './home/home.component';
import {CustomerRegisterComponent} from './customer-register/customer-register.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './home/update/update.component';
import { LoanComponent } from './home/loan/loan.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import { ChangepasswordComponent } from './home/changepassword/changepassword.component';
import { UpdatepasswordComponent } from './home/updatepassword/updatepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './forgotpassword/newpassword/newpassword.component';

const routes:Routes=[
  {path: '',component:StartupComponent},
  {path:'login-page',component:LoginComponentComponent},
  {path:'registeration-page',component:RegistrationPageComponent},
  {path:'home-page',component:HomeComponent},
  {path:'home-page/update-page',component:UpdateComponent},
  {path:'home-page/applyloan-page',component:LoanComponent},
  {path:'home-page/changepassword-page',component:ChangepasswordComponent},
  {path:'home-page/updatepassword-page',component:UpdatepasswordComponent},
  {path:'forgotpassword-page',component:ForgotpasswordComponent},
  {path:'forgotpassword-page/newpasswordupdate-page/:username',component:NewpasswordComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginComponentComponent,
    StartupComponent,
    HomeComponent,
    CustomerRegisterComponent,
    UpdateComponent,
    LoanComponent,
    NavbarComponent,
    ChangepasswordComponent,
    UpdatepasswordComponent,
    ForgotpasswordComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
