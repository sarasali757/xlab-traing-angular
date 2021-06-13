import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path:'Home',component: HomeComponent},
      {path:'Login', component: LoginComponent},
      {path :'Registr', component:RegistrationComponent},
      {path :'ForgetPassword', component: ForgetPasswordComponent},
      {path :'ChangePassword', component: ChangePasswordComponent},
      {path: 'Profile', component: ProfileComponent},
      {path :'**', component: NotFoundComponent},

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
