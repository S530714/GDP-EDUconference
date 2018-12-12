var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Attendee = new Schema({
    "fname": { type: String, required: true },
    "lname": { type: String, required: true },
    "email": { type: String, required: true },
    "contact": { type: String, required: true },
    "institution": { type: String, required: false },
    "institutionc": { type: String, required: false },
    "institutions": { type: String, required: false },
    "zipcode": { type: String, required: false },
    "country": { type: String, required: false },
    "program": { type: String, required: true },
    "food": { type: String, required: false },
    "pay": { type: String, required: false }
});

module.exports = mongoose.model('Attendee', Attendee);




