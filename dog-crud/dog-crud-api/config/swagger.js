exports.options = {
    routePrefix: '/documentation',
    exposeRoute:true,
    swagger:{
        info:{
            title: 'Fastify dog api',
            description: 'this is an api to estore your doggos',
            version: '1.0.0'
        },
        externalDocs:{
            url: 'https://swagger.io',
            description: 'More...'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}