import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmongo',
  templateUrl: './addmongo.component.html',
  styleUrls: ['./addmongo.component.css']
})
export class AddmongoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


-----
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