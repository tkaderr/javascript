var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/anonymous_notes');

var NoteSchema = new mongoose.Schema({
 note: String
}, {timestamps: true})
mongoose.model('Note', NoteSchema); // We are setting this Schema in our Models as 'User'
var Note = mongoose.model('Note')

//body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

//path
var path = require("path");
app.use(express.static(path.join(__dirname, '/notes/dist')));

//routes
app.get('/notes', function(req, res) {
    Note.find({}, function(err, data){
        console.log("data", data)
        res.json(data);
    })
})

app.post('/notes', function(req, res){
    Note.create(req.body)
    .then((data) => {console.log("addded successfully", data); res.json(data);})
    .catch((err) => {console.log(err)});

});

app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./notes/dist/index.html"))
    });


//connection listening
app.listen(8000, function() {
    console.log("listening on port 8000");
})
