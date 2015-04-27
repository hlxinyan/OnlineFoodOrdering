var mongoose = require('mongoose');
var config = require('../config/config.index');
var users = require('./schemas/UserDao');

var uri = 'mongodb://' + config.mongo.uri + '/' + config.mongo.db;
var options = {
    server: {poolSize: 5}
};
mongoose.connect(uri, options);


// get an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
    console.log('Databsae Connection Successfully Opened at ' + uri);
});

exports.users= users;
