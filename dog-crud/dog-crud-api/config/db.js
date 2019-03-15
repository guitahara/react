const mongoose = require('mongoose');
const CustomError = require('../lib/error');

module.exports.connectToDataBase = async () => {
    try {
       await  mongoose.connect('mongodb://localhost:27017/dogcrud', {useNewUrlParser: true});
       console.log('connected to database');
    } catch (error) {
        throw new CustomError(`MongoDB error:${error}`);
    }
}