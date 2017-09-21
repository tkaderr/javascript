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
    this._httpService.createMongo(this.mongo).subscribe(
      data => console.log("Got the data", data),
      err => console.log("component has error", err)
      
    )
    // this.router.navigate(['/']);
  }

}
