/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define the User Schema
var UserSchema = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    lastAccessTime: {type: Date, default: Date.now}

});


// The primary user model
var users = mongoose.model('users', UserSchema);

module.exports = users;