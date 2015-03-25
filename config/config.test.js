var config = require('./config.global');

config.env = 'dev';
config.hostname = 'test.example';
config.mongo.db = 'example_test';

module.exports = config;