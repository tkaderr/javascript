import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMongoComponent } from './add-mongo/add-mongo.component';
import { EditMongoComponent } from './edit-mongo/edit-mongo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddMongoComponent,
    EditMongoComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
