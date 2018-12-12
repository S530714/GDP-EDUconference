var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addprograms = new Schema({
    "add": {type:String, required:true}
           
    });

module.exports =  mongoose.model('addprograms', addprograms);