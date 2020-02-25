const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Roles = new Schema({
    role_title: String
});

module.exports = mongoose.model('Roles', Roles);