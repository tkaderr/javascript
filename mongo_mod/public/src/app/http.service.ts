import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

   constructor(private _http: Http) { }

createMongo(mongo) {
    return this._http.post(`/mongooses`, mongo)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveSurveys(){
    return this._http.get(`/survey`)
    .map( data => data.json() )
    .toPromise();
  }

    retrieveOneSurvey(id){
    return this._http.get(`/survey/${id}`)
    .map( data => data.json() )
    .toPromise();
  }

    deleteSurvey(id){
    return this._http.post(`/survey/delete`, id)
    .map( data => data.json() )
    .toPromise();
  }

}
