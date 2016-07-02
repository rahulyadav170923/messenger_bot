'use strict'

const Hapi=require('hapi')
const server = new Hapi.Server();

server.connection({ 
  host: 'localhost', 
  port: 8000 
});

server.route({
  method: 'GET',
  path:'/websocket', 
  handler: function (request,reply) {
    return reply(request.query['hub.challenge'])  
  }
});

server.route({
  method: 'GET',
  path:'/yo', 
  handler: function (request,reply) {
    return reply('fuck you')  
  }
});


server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
