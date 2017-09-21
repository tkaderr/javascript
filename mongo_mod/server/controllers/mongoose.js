var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
    index: function (req, res){
        Mongoose.find(function(err, data){
            if(err) {console.log(err);}
            res.render('index', {mongooses: data})
        }).sort({'createdAt': -1})
    },
    new: function (req, res){
        res.render('new');
    },
    show: function (req, res){
        Mongoose.find({_id: req.params.id}, function (err, mongooses){
            res.render('info', {mongooses: mongooses[0]});
        })
    },
    edit: function (req, res){
        res.render('edit', {id: req.params.id})
    },
    create: function (req, res){
        Mongoose.create(req.body, function (err, data){
            if(err) {console.log(err);}
            res.redirect('/');
        })
    },
    update: function (req, res){
        Mongoose.update({_id: req.params.id}, req.body, function (err, data){
            if(err) {console.log(err);}
            res.redirect('/');
        })
    },
    remove: function (req, res){
        Mongoose.remove({_id: req.params.id}, function (err, data){
            res.redirect('/');
        })
    },
}



-------

var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

module.exports = {

    //to add a new user
    createUser: function(req, res) {
    console.log("survey.js create req.body", req.body);
        User.find({username : req.body.username}, function(err, user){
            if(user.length > 0){
                console.log("User exists");
                res.json(true);
            }
            else{
                console.log("User doesnt exist");
                User.create(req.body)
                .then((data) =>{
                    console.log('successfully added a user!', data);
                    res.json(true);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json({message: "Unable to add user"});
                });
            }
        })
    },

    createSurvey: function(req, res) {
    console.log("creating survey with username", req.params.name);
    User.findOne({ username : req.params.name}, function(err, user){
        if(!err){
            var survey = new Survey(req.body);
            survey._user = user._id;
            survey.save(function(err){
            user._surveys.push(survey);
            user.save(function(err){
                if(err){
                    console.log("Error saving survey in user");
                }
                else {
                    res.json(true);
                }
                })
            })
        } else{
            console.log("Error creating survey", err);
        }
    
    })
},

    retrieveSurveys: function(req, res){
    Survey.find({}).sort('-createdAt').populate('_user').exec(function(err, items){
        if(!err){
            res.json(items);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
},

    showOne: function(req,res){
      Survey.find({_id: req.params.id}).populate('_user').exec(function(err, survey){
        if(!err){
            res.json(survey);
        }else{
            console.log(err);
            res.json(err);
        }
    });
},

    vote : function(req, res){
        console.log("In server vote up", req.body);
        Survey.findOne({_id: req.body.surveyid}, function(err, survey){
        if(!err){
            switch (req.body.optionIs) {
                case "option1":
                    console.log("Before",survey.option1.votes)
                    survey.option1.votes = survey.option1.votes + 1;
                    console.log("After", survey.option1.votes)
                    break;
                
                case "option2":
                    survey.option2.votes = survey.option2.votes + 1;
                    break;

                case "option3":
                    survey.option3.votes = survey.option3.votes + 1;
                    break;  

                case "option4":
                    survey.option4.votes = survey.option4.votes + 1;
                    break;
                default:
                    break;
                }
                console.log("Voting up a survey before save", survey);
            Survey.update({_id: req.body.surveyid}, survey)
            .then(response => {res.json(response)})
            .catch(err=>console.log('error at update vote',err));
        }else{
            console.log(err);
            res.json(err);
        }
    });
},

    delete : function(req, res){
        console.log("inside delete server side", req.body);
        Survey.remove({_id: req.body._id})
        .then(response => { "Deleted successfully", res.json(response)})
        .catch(err=>console.log('error in delete survey',err))
    }
};
