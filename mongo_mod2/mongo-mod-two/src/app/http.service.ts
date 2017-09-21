import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createMong(mongo) {
    console.log("im inside th createMongo of serviceddd:", mongo);
    return this._http.post('api/mongooses/delete', {id: 3})
    .map( data => data.json(),
    err => console.log("Got an error", err) )
   
  }

  createMongo(m){
    console.log("SEcond version of request", m);
    return this._http.post('api/mongooses/create', m)
    .map(data => data.json(),
      err => console.log("ERror", err))
  }

  retrieveMongos(){
    console.log("in httpservice retirvemongos")
    return this._http.get('/api/mongooses')
    .map( data => data.json() )
    // .toPromise();
  }

  retrieveOneMongo(id){
    console.log("inside the httpservice retrieveOneMongo and id:", id)
    return this._http.get(`/api/mongooses/${id}`)
    .map( data => data.json() )
    // .toPromise();
  }

  deleteMongo(id){
    console.log("inside the httpservice deleteMongo and id:", id)
    return this._http.post('/api/mongooses/delete', {"id":id})
    .map( data => data.json() )
    // .toPromise();
  }

}
