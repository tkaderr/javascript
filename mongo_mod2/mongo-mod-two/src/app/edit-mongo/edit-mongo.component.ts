
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-mongo',
  templateUrl: './edit-mongo.component.html',
  styleUrls: ['./edit-mongo.component.css']
})
export class EditMongoComponent implements OnInit {
mongo_id : string;
onemongo=[];

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private router: Router) {  
      // console.log("in one")
      // this._route.params.subscribe((param)=>{
      //   console.log("this is the param values",param.id);
      //   this.mongo_id = param.id;
      //   this._httpService.retrieveOneMongo(this.mongo_id)
      //   .subscribe(
      //       data=>{this.onemongo = data; console.log("Topic:",this.onemongo),
      //       err=>{console.log("err in retrieving one topic", err);}})
      //   // .then(data=>{
      //   //     this.onemongo = data; console.log("Topic:",this.onemongo);
      //   //   })
      //   //   .catch(err=>{console.log("err in retrieving one topic", err);}) 
      // })
    }

  ngOnInit() {
    console.log("in one")
      this._route.params.subscribe((param)=>{
        console.log("this is the param values",param.id);
        this.mongo_id = param.id;
        this._httpService.retrieveOneMongo(this.mongo_id)
        .subscribe(
            data=>{this.onemongo = data; console.log("Topic:",this.onemongo),
            err=>{console.log("err in retrieving one topic", err);}})
        // .then(data=>{
        //     this.onemongo = data; console.log("Topic:",this.onemongo);
        //   })
        //   .catch(err=>{console.log("err in retrieving one topic", err);}) 
      })
  }

}
