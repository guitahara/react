const {connectToDataBase} = require('./config/db')
const fastify = require('fastify')({
    logger:true
})
const fastifySwagger = require('fastify-swagger');
const routes = require('./src/routes/routes');
const swagger = require('./config/swagger');

//register swagger
fastify.register(fastifySwagger,swagger.options)

//register routes
routes.forEach(route => fastify.route(route))

//route example
fastify.get('/api', async (request, reply) => ({hello:'Welcome to the dog API!'}))

const start = async() => {
    try {
        //connect to mongodb database
        await connectToDataBase()
        //start server
        await fastify.listen('8080')
        //start swagger
        await fastify.swagger()
        fastify.log.info(`server listening to port ${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.error(error)
        console.log(error)
        process.exit(1)
    }
}

start()