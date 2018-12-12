var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Amount = new Schema({
    "type": {type:String, required:true},
    "amount": {type: String, required: true},
        
    });

module.exports =  mongoose.model('Amount', Amount);