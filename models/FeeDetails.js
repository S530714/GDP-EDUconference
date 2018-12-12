var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeeDetails = new Schema({
    "rates": {type:String, required:true},
    "fee": {type: String, required: true},
    "extra": {type: String, required: true},
    
    });

module.exports =  mongoose.model('FeeDetails', FeeDetails);