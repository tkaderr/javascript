var mongoose = require('../controllers/mongoose.js');

module.exports = function (app){
    console.log("in routes");
    //show all mongooses
    app.get('/api/mongooses', function (req, res){
        console.log("in get req")
        mongoose.show(req, res);
    })

    //create mongo
    app.post('/api/mongooses/create', function (req, res){
        console.log("in routes.js post create")
        mongoose.create(req, res);
    })

    //delete mongo
    app.post('/api/mongooses/delete', function(req, res){
        console.log("in routesjs delete")
    mongoose.delete(req,res);
  });

    //show one
    app.get('/api/mongooses/:id', function(req, res){
    mongoose.showOne(req,res);
});
    //default
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./mongo-mod-two/dist/index.html"))
    });
}
