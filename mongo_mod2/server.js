var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname, '/mongo-mod-two/dist')));

require('./server/config/mongoose.js');
console.log("inside server")
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000 now");
});