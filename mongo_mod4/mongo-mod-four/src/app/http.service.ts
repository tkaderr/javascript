import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

retrieveMongos(){
    return this._http.get('/api/mongooses')
    .map( data => data.json() )

  }

createMongo(m){
    return this._http.post('api/mongooses/create', m)
    .map(data => data.json(),
      err => console.log("ERror", err))
  }

}
