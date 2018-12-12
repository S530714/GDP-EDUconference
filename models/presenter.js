var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Presenter = new Schema({
    "fname": { type: String, required: true },
    "lname": { type: String, required: true },
    "email": { type: String, required: true },
    "contact": { type: String, required: true },
    "target": { type: String, required: true },
    "topic": { type: String, required: true },
    "attach": { type: String, required: false },
    "attach1": { type: String, required: false },
    "subject": { type: String, required: true },
    "food": { type: String, required: false },
    "confirm": { type: String, required: false },
    "delete": { type: String, required: false },
    "pay": { type: String, required: false }
    
});

module.exports = mongoose.model('Presenter', Presenter);