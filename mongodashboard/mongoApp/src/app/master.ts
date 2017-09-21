DASHBOARD CODE:
---------------------------------------------------------------

DASHBOARD HTML:

<p>
<a [routerLink] = "['/create']"> Create a new Poll </a> |
<a [routerLink] = "['/logout']" (click)="logout()"> Logout </a>
</p>


<div class = "row">
  <h3 >Current Polls:</h3>
  <input id = "search" name = "search" class  = "input-field col s4 offset-s8"type="text" [(ngModel)] = 'search' placeholder="Search">
</div>
<div *ngIf = "surveys">
  <table>
  <thead>
    <th>Name</th>
    <th>Survey Question</th>
    <th>Date Posted</th>
    <th>Action</th>
  </thead>
  <tbody>
    <tr *ngFor = "let survey of surveys">
      <td> {{survey._user.username}} </td>
      <td> <a [routerLink] = "['/poll', survey._id]"> {{survey.question}}</a></td>
      <td> {{survey.createdAt | date:'longDate'}}</td>
      <td *ngIf = "key === survey._user.username"> <a (click) = "deleteSurvey(survey._id)">Delete</a></td>
    </tr>
  </tbody>
</table>
</div>

DASHBOARD TS:
-----------------------------

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search;
  key:string;
  surveys = [];
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
    this._httpService.retrieveSurveys()
    .then( data => { this.surveys = data; console.log("Surveys in dasboard", data);})
    .catch( err => { console.log("error in survey retrieval",err); });
  }

  logout(){
    this._cookieService.removeAll();
    console.log("The key is empty:",(this._cookieService.get("key")) );
  }

  deleteSurvey(id){
    this._httpService.deleteSurvey({_id :id})
    .then( data => { console.log("Deleted survey", data); 
      this.router.navigate(['/dashboard']);
      this._httpService.retrieveSurveys()
      .then( data => { console.log("Surveys in dasboard", data); console.log(this._cookieService.get("key"));this.surveys = data})
      .catch( err => { console.log("error in survey retrieval",err); });
  })
    .catch( err => { console.log("error in survey retrieval",err); });
  }
}

ADD MONGO CODE:
----------------------------------

<p>
<a [routerLink] = "['/dashboard']"> Cancel </a>
</p>

<h4>Put the question and options here:</h4>

<div class = "formTopic" class = "container">
    <form #formTopic = 'ngForm'>
      <label for="question">Question:</label>
      <input type="text" name="question" id = "question" value="" 
      required
      minlength = 8
      [(ngModel)] = 'survey.question' 
      #question = 'ngModel'>
       <div *ngIf='question.errors && (question.touched || formTopic.submitted)'>
          <small id = "red" *ngIf = "question.errors?.required">* Question is required</small><br>
          <small id = "red" *ngIf = "question.errors?.minlength">* Question must be at least 8 characters long</small>
      </div>

      <label for="option1">Option 1:</label>
      <input type="text" name="option1" id = "option1" value="" 
      required
      minlength = 3
      [(ngModel)] = 'survey.option1.name' 
      #option1 = 'ngModel'>
       <div *ngIf='option1.errors && (option1.touched || formTopic.submitted)'>
          <small id = "red" *ngIf = "option1.errors?.required">* Option 1 is required</small><br>
          <small id = "red" *ngIf = "option1.errors?.minlength">* Option 1 must be at least 3 characters long</small>
      </div>

      <label for="option2">Option 2:</label>
      <input type="text" name="option2" id = "option2" value="" 
      required
      minlength = 3
      [(ngModel)] = 'survey.option2.name' 
      #option2 = 'ngModel'>
       <div *ngIf='option2.errors && (option2.touched || formTopic.submitted)'>
          <small id = "red" *ngIf = "option2.errors?.required">* Option 2 is required</small><br>
          <small id = "red" *ngIf = "option2.errors?.minlength">* Option 2 must be at least 3 characters long</small>
       </div>
        
      <label for="option3">Option 3:</label>
      <input type="text" name="option3" id = "option3" value="" 
      required
      minlength = 3
      [(ngModel)] = 'survey.option3.name' 
      #option3 = 'ngModel'>
       <div *ngIf='option3.errors && (option3.touched || formTopic.submitted)'>
          <small id = "red" *ngIf = "option3.errors?.required">* Option 3 is required</small><br>
          <small id = "red" *ngIf = "option3.errors?.minlength">* Option 3 must be at least 3 characters long</small>
      </div>  
      
      <label for="option4">Option 4:</label>
      <input type="text" name="option4" id = "option4" value="" 
      required
      minlength = 3
      [(ngModel)] = 'survey.option4.name' 
      #option4 = 'ngModel'>
       <div *ngIf='option4.errors && (option4.touched || formTopic.submitted)'>
          <small id = "red" *ngIf = "option4.errors?.required">* Option 4 is required</small><br>
          <small id = "red" *ngIf = "option4.errors?.minlength">* Option 4 must be at least 3 characters long</small>
      </div>

      <div class = "row">
         <button class = "col s2 offset-s10" type="button" [disabled] = "!formTopic.form.valid" (click) = "create(formTopic)" name="submit" value="Create Poll" class = "waves-effect waves-light btn green">Create Poll</button>
      </div>
    </form>
  
  </div>

ADD MONGO TS:
-------------------------------------------

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  survey = {
    question : "",
    option1 : { name : "", votes : 0}, 
    option2 : { name : "", votes : 0},
    option3 : { name : "", votes : 0},
    option4 : { name : "", votes : 0},
    username : ""
  }
  key : string;
  
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { 
    this.key = this._cookieService.get("key")
      console.log("Create key", this.key);
      if(this.key === undefined){
        this.router.navigate(['/login']);
      } 
  }

  ngOnInit() {
  }

  create(form){
    this.survey.username = this._cookieService.get("key");
    this._httpService.createSurvey(this.survey, this._cookieService.get("key"))
    .then(data => {console.log("in create survey",data);})
    .catch(err => {console.log("error in create survey", err);});
    form.resetForm();
    this.router.navigate(['/dashboard']);
  }

}

MONGO DETAIL CODE:
----------------------------------------------------------------

MONGO DETAIL HTML:


<p id = "link">
  <a [routerLink] = "['/dashboard']"> Go to Polls </a> 
</p>
<div class = "container" *ngIf = "survey">
  <p> <b>  {{survey[0].question}} </b> </p>
  <small> Click the Vote button to choose one. </small>

  <table >
    <thead>
      <th> Option </th>
      <th> Current Count of Votes </th>
      <th> Action </th>
   </thead>
  <tbody >
    <tr>
      <td> {{survey[0].option1.name}} </td>
      <td> {{survey[0].option1.votes}} </td>
      <td> <button type="button" (click) = "voteUp('option1')"class = "waves-effect waves-light btn green">Vote</button> </td>
    </tr>
    <tr>
      <td> {{survey[0].option2.name}} </td>
      <td> {{survey[0].option2.votes}} </td>
      <td> <button type="button" (click) = "voteUp('option2')" class = "waves-effect waves-light btn green">Vote</button> </td>
    </tr>
    <tr>
      <td> {{survey[0].option3.name}} </td>
      <td> {{survey[0].option3.votes}} </td>
      <td> <button type="button" (click) = "voteUp('option3')" class = "waves-effect waves-light btn green">Vote</button> </td>
    </tr>
    <tr>
      <td> {{survey[0].option4.name}} </td>
      <td> {{survey[0].option4.votes}} </td>
      <td> <button type="button"  (click) = "voteUp('option4')" class = "waves-effect waves-light btn green">Vote</button> </td>
    </tr>
  </tbody>
  </table>
</div>

MONGO DETAIL TS:
-----------------------------------------

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  survey_id : string;
  key : string;
  survey; vote ;
  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this.key = this._cookieService.get("key")
      console.log("Create key", this.key);
      if(this.key === undefined){
        this.router.navigate(['/login']);
      }  
      this._route.params.subscribe((param)=>{
        this.survey_id = param.id;
        this.retrieveOneTopic(this.survey_id);  
      })
    }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
  }

  retrieveOneTopic(surveyid){
    this._httpService.retrieveOneSurvey(surveyid)
      .then(data=>{
        this.survey = data;
      })
      .catch(err=>{console.log("err in retrieving one survey", err);})
 } 
    


voteUp(option){
    this.vote = {
      surveyid : this.survey_id,
      optionIs : option
    }
    this._httpService.upvote(this.vote)
    .then(data=>{console.log("Voted:",data); this.retrieveOneTopic(this.survey_id);})
    .catch(err=>{console.log("Failed to vote:",err);})
  }
}

APP ROUTING TS:
-----------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/login'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'logout',redirectTo:'login'},
  { path: 'poll/:id', component: PollComponent },
  { path: 'create',component: AddSurveyComponent },
  { path: '**', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


HTTP SERVICE TS:
----------------------------------
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createUser(user) {
    return this._http.post(`/user`, user)
    .map( data => data.json() )
    .toPromise();
  }

  createSurvey(survey, name) {
    return this._http.post(`/survey/create/${name}`, survey)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveSurveys(){
    return this._http.get(`/survey`)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveOneSurvey(id){
    return this._http.get(`/survey/${id}`)
    .map( data => data.json() )
    .toPromise();
  }

  upvote(vote){
    return this._http.post(`/survey/vote`, vote)
    .map( data => data.json() )
    .toPromise();
  }

  deleteSurvey(id){
    return this._http.post(`/survey/delete`, id)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveAll() {
    return this._http.get(`/items`)
    .map( data => data.json() )
    .toPromise();
  }
  create(item) {
    return this._http.post(`/items`, item)
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get(`/items/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  update(item, id) {
    return this._http.put(`/items/${id}`, item)
    .map( data => data.json() )
    .toPromise();
  }
  deleteOne(item, id) {
    return this._http.put(`/items/${id}`, item)
    .map( data => data.json() )
    .toPromise();
  }
}


APP MODULE TS:

------------------------------------

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { PollComponent } from './poll/poll.component';
import { MongodetailComponent } from './mongodetail/mongodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddSurveyComponent,
    PollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

APP COMPONENT TS:
--------------------------

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  key = this._cookieService.get("key");
  constructor(private _cookieService:CookieService){
  }

  logout(){
    console.log("The key is:",(this._cookieService.get("key")) );
    this._cookieService.removeAll();
    console.log("The key is empty:",(this._cookieService.get("key")) );
  }

  ngOnInit() {
    this.key = this._cookieService.get("key") ; 
  }
}

APP COMPONENT HTML:
-----------------------------
<router-outlet></router-outlet>


SERVER JS:
-----------------------------
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});


MODELS- MONGOOSE JS:
----------------------------------

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
_surveys: [{type:Schema.Types.ObjectId, ref: 'Survey'}],
});
mongoose.model('User',UserSchema);

var Option = new Schema({
    name: { type: String, required: true},
    votes : {type : Number}
});

var SurveySchema = new mongoose.Schema({
 question: { type: String, required: true},
 option1 : Option,
 option2 : Option,
 option3 : Option,
 option4 : Option,
 _user : {type:Schema.Types.ObjectId, ref: 'User'},
 username : { type: String, required: true}
}, {timestamps: true });
mongoose.model('Survey', SurveySchema);

CONTROLLER - SURVEY JS:
-----------------------------------------

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
_surveys: [{type:Schema.Types.ObjectId, ref: 'Survey'}],
});
mongoose.model('User',UserSchema);

var Option = new Schema({
    name: { type: String, required: true},
    votes : {type : Number}
});

var SurveySchema = new mongoose.Schema({
 question: { type: String, required: true},
 option1 : Option,
 option2 : Option,
 option3 : Option,
 option4 : Option,
 _user : {type:Schema.Types.ObjectId, ref: 'User'},
 username : { type: String, required: true}
}, {timestamps: true });
mongoose.model('Survey', SurveySchema);

CONFIG MONGOOSE JS:
----------------------------------------

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/Survey'); //Change the database name
mongoose.Promise = global.Promise;
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});

CONFIG ROUTES JS:
----------------------

var survey = require('../controller/survey.js');
var path = require('path');

module.exports = function(app){

  app.post('/user', function(req, res){
    survey.createUser(req,res);
  });

  app.post('/survey/create/:name', function(req, res){
    survey.createSurvey(req,res);
  });
  
  app.get('/survey', function(req, res){
    survey.retrieveSurveys(req,res);
  });

  app.get('/survey/:id', function(req, res){
    survey.showOne(req,res);
  });

  app.post('/survey/vote', function(req, res){
    survey.vote(req,res);
  });

  app.post('/survey/delete', function(req, res){
    survey.delete(req,res);
  });

  app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};