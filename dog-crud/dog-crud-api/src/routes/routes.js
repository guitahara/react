const controller = require('../controllers/dogController');
const schemas = require('./schemas/schema');

const routes = [
    {
        method: 'GET',
        url: '/api/dogs',
        schema: schemas.get,
        handler: controller.get
    },
    {
        method: 'GET',
        url: '/api/dogs/:id',
        schema:schemas.getById,
        handler: controller.getById
    },
    {
        method: 'POST',
        url: '/api/dogs',
        schema: schemas.post,
        handler: controller.post
    },
    {
        method: 'DELETE',
        url: '/api/dogs/:id',
        schema: schemas.delete,
        handler: controller.remove
    },
    {
        method: 'PUT',
        url: '/api/dogs/:id',
        schema: schemas.put,
        handler: controller.put
    }
]

module.exports = routes;