import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// mongos = [{
// _id: 1,  
// name: "kevin",
// location: "far",
// skill: "fast",
// color: "black"
// }]

mongos = [];
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log("dashbaord loaded comp")
    this._httpService.retrieveMongos()
    .subscribe(data => { this.mongos = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }})
    // .then( data => { this.mongos = data; console.log("Surveys in dasboard", data);})
    // .catch( err => { console.log("error in survey retrieval",err); });
  }

deleteMongoose(id){
  console.log("inside dashbord component deletemongoose")
    this._httpService.deleteMongo(id).subscribe(data => { console.log("Deleted mongoose", data)
      this.router.navigate(['/']);
      this._httpService.retrieveMongos()
            .subscribe(
                data => { this.mongos = data; console.log("Surveys in dasboard", data)},
                err => { console.log("error in survey retrieval",err); }
            )
    
    })//end of .subscribe

  }//end of deleteMongoose
}//end of class
