var mongoose = require('mongoose');
var config = require('./config.index');

var uri = 'mongodb://' + config.mongo.uri + '/' + config.mongo.db;
var options = {
    server: {poolSize: 5}
};
options.server.socketOptions = options.replset.socketOptions = {keepAlive: 1};
mongoose.connect(uri, options);
