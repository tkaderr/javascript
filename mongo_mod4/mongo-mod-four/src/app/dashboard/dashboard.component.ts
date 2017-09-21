import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

mongos = []

  constructor(private _httpService: HttpService, private router: Router) { }

   ngOnInit() {
    this._httpService.retrieveMongos()
    .subscribe(data => { this.mongos = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }})
  }

}
