var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
    //show all mongoose
    show: function (req, res){
        Mongoose.find({}, function (err, mongooses){
        if(!err){
            console.log("successful loaded all inside the server mongoose.js show")
            res.json(mongooses);
        }
        else{
            console.log("error");
            console.log(err);
            res.json(err);
        }
        })
    },

    //show one mongoose
    showOne: function (req, res){
        console.log("inside server showOne")
        Mongoose.find({_id: req.params.id}, function (err, mongooses){
            if(!err){
            res.json(mongooses);
        }else{
            console.log(err);
            res.json(err);
        }
        })
    },

    //create mongo
    create: function (req, res){
        console.log("im in side mongoose js create", req.body)
        Mongoose.create(req.body, function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add mongoose"});
            }
            console.log("successful post:", data)
            res.json(true);
        })
    },
     
    //Delete Mongo 
    delete : function(req, res){
        console.log("inside delete server side", req.body);
        Mongoose.remove({_id: req.body.id}, function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add mongoose"});
            }
            console.log("successful post")
            res.json(true);
        })
    }
}


