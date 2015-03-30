var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var  menuSchema = new Schema({
    name:  String,
    price:Number,
    updated:{type:Date,default: Date.now},
    created:{type:Date,default: Date.now},
    restaurant:{type:Schema.Types.ObjectId,ref:"Restaurant"}
});


var Menu = mongoose.model('Menu', menuSchema);




