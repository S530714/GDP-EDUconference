var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Name = new Schema({
    "conference": {type:String, required:true}
           
    });

module.exports =  mongoose.model('Name', Name);