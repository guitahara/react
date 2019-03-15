module.exports.get = {
      description: 'return a list of all dogs',
      tags: ['dog'],
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          required: ['response'],
          properties: {
            response:{
                type: 'object',
                properties: {
                    dogs: { 
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['name','race'],
                            properties: {
                                _id:{type:'string'},
                                name:{type: 'string'},
                                race:{type: 'string'},
                                age:{type: 'integer'},
                                color:{type: 'string'},
                                size:{type: 'string'}
                            }
                        } 
                    },
                    message: {type: 'string'}
                }
            }
          }
        }
      }
}

module.exports.getById = {
    description: 'return a dog',
    tags: ['dog'],
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
            response:{
                type: 'object',
                properties: {
                    dog: { 
                            type: 'object',
                            properties: {
                                _id:{type:'string'},
                                name:{type: 'string'},
                                race:{type: 'string'},
                                age:{type: 'integer'},
                                color:{type: 'string'},
                                size:{type: 'string'}
                            }
                    },
                    message:{type: 'string'}
                }
            }
              
            } 
          }
        }
      }
    


module.exports.put = {
    description: 'update a dog',
    tags: ['dog'],
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'dog id'
        }
      }
    },
    body: {
      type: 'object',
      properties: {
        dog: { 
            type: 'object',
            properties: {
                name:{type: 'string'},
                race:{type: 'string'},
                age:{type: 'integer'},
                color:{type: 'string'},
                size:{type: 'string'}
            } 
        },
      }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                dog: { 
                    type: 'object',
                    properties: {
                        _id:{type:'string'},
                        name:{type: 'string'},
                        race:{type: 'string'},
                        age:{type: 'integer'},
                        color:{type: 'string'},
                        size:{type: 'string'}
                    } 
                }
            }
        }
    }
}

module.exports.delete = {
    description: 'delete a dog',
    tags: ['dog'],
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'dog id'
        }
      }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                dog: { 
                    type: 'object',
                    properties: {
                        _id:{type:'string'},
                        name:{type: 'string'},
                        race:{type: 'string'},
                        age:{type: 'integer'},
                        color:{type: 'string'},
                        size:{type: 'string'}
                    } 
                }
            }
        }
    }
}


module.exports.post = {
    description: 'insert a dog',
    tags: ['dog'],
    body: {
      type: 'object',
      properties: {
        dog: { 
            type: 'object',
            properties: {
                name:{type: 'string'},
                race:{type: 'string'},
                age:{type: 'integer'},
                color:{type: 'string'},
                size:{type: 'string'}
            } 
        },
      }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                dog: { 
                    type: 'object',
                    properties: {
                        _id:{type:'string'},
                        name:{type: 'string'},
                        race:{type: 'string'},
                        age:{type: 'integer'},
                        color:{type: 'string'},
                        size:{type: 'string'}
                    } 
                }
            }
        }
    }
}
