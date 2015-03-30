var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    name:  String,
    address:String,
    phone:String,
    updated:{type:Date,default: Date.now},
    created:{type:Date,default: Date.now}
});


var Restaurant = mongoose.model('Restaurant', restaurantSchema);