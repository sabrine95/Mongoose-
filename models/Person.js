const mongoose = require('mongoose');

const person = mongoose.Schema({
    name:{
        type:String,
        required:true
    },age:{
        type:Number
    },favoriteFoods:{
        type:[String],
        
    }

});


module.exports = mongoose.model('person',person)