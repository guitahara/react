const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name:{type:String, required: true},
    race:{type:String, required:true},
    age:{type:Number,required:false},
    color:{type:String, required:false},
    size:{type:String, required:false}
})

module.exports = mongoose.model('dog',DogSchema)