//import
var express = require('express');
var app = express(); //invoked express;
var path =require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//setup
mongoose.connect('mongodb://localhost/birds');

var birdSchema = new mongoose.Schema({
  name: {type:String, required:[true, "A name is required"], minlength: [2,"Name must be 2 char"]},
  color: {type:String, required:[true, "A color is required"], minlength: [3, "Colors must contain 3 char"]}
}, {timestamps:true})

//set model
mongoose.model('Bird', birdSchema);
//get model
var Bird = mongoose.model('Bird');

app.use(bodyParser.urlencoded({etended:true}));
app.use(express.static(path.join(__dirname, './bower_components')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//router
app.get('/', function(req,res) {
    //get all mongooses
    res.render('index');
})

app.get('/mongooses/new', function(req,res){
  res.render('create');
})

app.get('/mongooses/:id', function(req,res){
  //get the mongoose with the id from the urlencoded
  res.render('shows');
})

app.post('/mongooses', function(req, res){
  Bird.create(req.body, function(err){
    if(err){
      console.log(err);
      var errors=[];
      for(var key in err.errors){
        errors.push(err.errors[key].message);
      }
      res.render('create',{errors: errors})
    }
    else {
      res.redirect('/');
    }
  })
  console.log("Made it to post mongoose");
})

app.get('/mongooses/edit/:id', function(req, res){
  res.render('edit');
})

app.post('/mongoose/:id', function(req,res){
  console.log("made it to post mongoose/id");
  res.redirect('/');
})

app.post('/mongoose/destory/:id', function(req,res){
  console.log("made it to destroy");
  res.redirect('/');
})

app.listen(8000, function(){
  console.log("listenin on 8000");
})
