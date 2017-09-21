import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
Mongos = [{ 
  _id: 4,
  Name: "Bob",
},
{
  _id: 5,
  Name: "John"
}]

  constructor() { }

  ngOnInit() {
  }

}
