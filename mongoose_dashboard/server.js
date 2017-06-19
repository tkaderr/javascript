var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var AnimalSchema = new mongoose.Schema({
 name: String,
 location: String,
 weight: Number,
}, {timestamps: true})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var path = require("path");
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  Animal.find({}, function(err,data) {
    if(err) {console.log(err); }
    res.render("index", { animals: data})
  })
})

app.get('/:id', function(req, res){
  Animal.find({ _id: req.params.id }, function(err, data) {
    if (err) { console.log(err); }
    res.render('show', { animals: data[0]});
  });
});

app.get('/edit/:id', function(req, res){
  Animal.find({ _id: req.params.id }, function(err, data) {
    if (err) { console.log(err); }
    res.redirect('edit', { animals: data[0]});
  });
});

app.post('/:id', function(req, res){
  Animal.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.get('/new', function(req, res) {
  res.render("new");
})

app.post('/post/new', function(req, res){
  Animal.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})
