import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.components';
import {PostAddComponent} from './components/postAdd/postAdd.components';
import {UserComponent} from './components/user/user.component';
import {NavBarComponent} from './components/navbar/navbar.components';
import {LoginRegisterComponent} from './components/loginAndRegistration/loginRegister.components';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot([{path:'',component:HomeComponent},{path:'postAdd',component:PostAddComponent},{path:'userProfile',component:UserComponent}]) ],
  declarations: [ AppComponent, NavBarComponent,LoginRegisterComponent, HomeComponent, PostAddComponent, UserComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
