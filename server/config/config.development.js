var config ={};

config.env = 'dev';
config.hostname = 'localhost';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || '127.0.0.1';
config.mongo.db = 'food_ordering';

module.exports = config;