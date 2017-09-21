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
    "name": ""
  }

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

create(form){
  console.log("this is the data:,",this.mongo);
  console.log("this is form:",form)
  console.log("submitted");
    this._httpService.createMongo(JSON.stringify(this.mongo))
    .subscribe( (params)=> console.log("Inside service creatMongo params:", params) )
    // .then(data => {console.log("in create survey",data);})
    // .catch(err => {console.log("error in create survey", err);});
    form.resetForm();
    this.router.navigate(['/']);
  }
  
}

