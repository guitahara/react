const Dog = require('../models/dog');
const CustomError = require('../../lib/error');

module.exports.get = async (filter) => {
    try {
        return await Dog.find()
    } catch (error) {
       throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.getById = async (id) => {
    try {
        return await Dog.findById(id)
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.insert = async (dog) => {
    try {
        const newDog = new Dog({...dog})
        return await newDog.save()
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.update = async (id,dog) => {
    try {
        return await Dog.findByIdAndUpdate(id,{...dog},{new:true})
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.remove = async (id) => {
    try {
        return await Dog.findByIdAndRemove(id)
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

