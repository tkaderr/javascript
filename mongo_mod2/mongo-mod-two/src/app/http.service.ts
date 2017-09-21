import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createMongo(mongo) {
    console.log("im inside th createMongo of service:", mongo)
    return this._http.post('/api/mongooses/create', mongo)
    .map( data => data.json() )
   
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
