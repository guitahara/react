const CustomError = require('../../lib/error');
const {get,getById,insert,remove,update} = require('../services/dogService');

module.exports.get = async(request,reply) => {
    try {
        const dogs = await get();
        
        return  dogs.length
                ?{response:{dogs}}
                :{response:{dogs,message:'No dogs were found!'}}

    } catch (error) {
        throw new CustomError (`Dog error:${error}`, 400)
    }
}

module.exports.getById = async(request,reply) => {
    try {
        const id = request.params.id;
        const dog = await getById(id);

        return  dog
                ?{response:{dog}}
                :{response:{dog,message:'No dogs were found!'}}

    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.post = async(request,reply) => {
    try {
        const {...dog} = request.body;
        const inserted = await insert(dog);
        return {response:{dog:inserted}}
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.remove = async(request,reply) => {
    try {
        const id = request.params.id
        const dog = await remove(id);
        return {response:{dog}}
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}

module.exports.put = async(request,reply) => {
    try {
        const id = request.id
        const {...dog} = request.body.dog
        const updated = await update(id,dog)
        return {response:{dog:updated}}
    } catch (error) {
        throw new CustomError(`Dog error:${error}`, 400)
    }
}