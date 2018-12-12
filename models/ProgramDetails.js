var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramDetails = new Schema({
    "Time": {type:String, required:true},
    "Activity": {type: String, required: true},
    "Location": {type: String, required: true},
    "Program": {type: String, required: true},
    "Description": {type: String, required: true},
    "Presenter": {type: String, required: false},
    "Presentation": {type: String, required: false}    
    });

module.exports =  mongoose.model('ProgramDetails', ProgramDetails);