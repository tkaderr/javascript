import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createUser(user) {
    return this._http.post(`/user`, user)
    .map( data => data.json() )
    .toPromise();
  }

  createSurvey(survey, name) {
    return this._http.post(`/survey/create/${name}`, survey)
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

  upvote(vote){
    return this._http.post(`/survey/vote`, vote)
    .map( data => data.json() )
    .toPromise();
  }

  deleteSurvey(id){
    return this._http.post(`/survey/delete`, id)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveAll() {
    return this._http.get(`/items`)
    .map( data => data.json() )
    .toPromise();
  }
  create(item) {
    return this._http.post(`/items`, item)
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get(`/items/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  update(item, id) {
    return this._http.put(`/items/${id}`, item)
    .map( data => data.json() )
    .toPromise();
  }
  deleteOne(item, id) {
    return this._http.put(`/items/${id}`, item)
    .map( data => data.json() )
    .toPromise();
  }
}