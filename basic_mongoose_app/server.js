var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
}, {timestamps: true})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var path = require("path");
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/results');
    }
  })
})

app.get("/results", function(req, res){
  User.find({}, function(err, users) {
    console.log(users);
   res.render("results", users)
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
