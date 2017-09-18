import { Component } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  key:string;
  headerfalse:boolean;

  constructor(private _cookieService:CookieService){
    this.key = this._cookieService.get("key");
    if (this.key === undefined){
        this.headerfalse = false;
    }
  }


  logout(){
    console.log("The key is:",(this._cookieService.get("key")) );
    this._cookieService.removeAll();
    console.log("The key is empty:",(this._cookieService.get("key")) );
  }
}
