import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
retrieveAll() {
    return this._http.get(`/items`)
    .map( data => data.json() )
    .toPromise();
  }
  createUser(user) {
    return this._http.post(`/user`, user)
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
  // deleteOne(id) {
  //   return this._http.put('/items/${id}')
  //   .map( data => data.json() )
  //   .toPromise();
  // }

  //Topic CRUD's

  retrieveOneTopic(id) {
    return this._http.get(`/topic/${id}`)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveTopics() {
    return this._http.get(`/topic`)
    .map( data => data.json() )
    .toPromise();
  }

  createTopic(topic, name) {
    return this._http.post(`/topic/${name}`, topic)
    .map( data => data.json() )
    .toPromise();
  }

  //Post CRUD:

  createPost(post, name) {
    return this._http.post(`/post/${name}`, post)
    .map( data => data.json() )
    .toPromise();
  }

}
