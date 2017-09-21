import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app Tahim';
  x = 5;
}


---------

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