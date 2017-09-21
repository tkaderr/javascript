var mongoose = require('../controllers/mongoose.js')

module.exports = function (app){
    app.get('/', function(req, res){
        mongoose.index(req, res);
    })
    app.get('/new', function (req, res){
        mongoose.new(req, res);
    })
    app.get('/mongooses/:id', function (req, res){
        mongoose.show(req, res);
    })
    app.get('/mongooses/edit/:id', function (req, res){
        mongoose.edit(req, res);
    })
    app.post('/', function (req, res){
        mongoose.create(req, res);
    })
    app.post('/mongooses/:id', function (req, res){
        mongoose.update(req, res);
    })
    app.post('/mongooses/destroy/:id', function (req, res){
        mongoose.remove(req, res);
    })
}
