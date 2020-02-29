const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Candidates = new Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Phone: Number,
    Position: String,
    City: String,
    State: String,
    Zip: Number, 
});

module.exports = mongoose.model('Candidates', Candidates);