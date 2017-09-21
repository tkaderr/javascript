import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-mongo',
  templateUrl: './add-mongo.component.html',
  styleUrls: ['./add-mongo.component.css']
})
export class AddMongoComponent implements OnInit {

  mongo = {
    name: "",
    location: "",
    skill: "",
    color: ""
  }

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  create(form){
    this._httpService.createMongo(this.mongo)
    .then(data => {console.log("in create survey",data);})
    .catch(err => {console.log("error in create survey", err);});
    form.resetForm();
    this.router.navigate(['']);
  }
  
}
