import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import {usercountComponent}from'./user/usercount.component';

@NgModule({
  declarations: [
    AppComponent,  UserlistComponent, usercountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
