var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], minlength: 2 }
    // location: { type: String, required: [true, 'location required'], minlength: 3 },
    // skill: { type: String, required: [true, 'skill required'], minlength: 3 },
    // color: { type: String, required: [true, 'color required'], minlength: 3 }
}, { timestamps: true });
var Mongoose = mongoose.model('Mongoose', MongooseSchema);
