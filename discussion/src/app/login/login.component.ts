import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username : ''
  }
  headerfalse= true;

  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {

  }

  login(form){
    this._httpService.createUser(this.user)
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);});

    this._cookieService.put("key", this.user.username)
    console.log(this._cookieService.get("key"));
    this.router.navigate(['/dashboard']);
    
  }

}
