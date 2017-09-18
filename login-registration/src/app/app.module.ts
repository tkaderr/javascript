import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//add
//import { HttpService } from './http.service';//add
//import { AppRoutingModule } from './app-routing.module';//add
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
     FormsModule //add
    //AppRoutingModule//add
    //HttpModule //add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
