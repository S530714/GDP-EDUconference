var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Deadlines = new Schema({
    "programname": {type:String, required:true},
    "Date": {type: String, required: true},
        
    });

module.exports =  mongoose.model('Deadlines', Deadlines);