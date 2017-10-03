'use strict'

const Hapi=require('hapi')
const server = new Hapi.Server();

server.connection({ 
  host: 'localhost', 
  port: process.env.PORT || 5000 
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
    return reply('wrong')  
  }
});


server.start((err) => {

  if (err) {
    throw err;
  }
//   console.log('Server running at:', server.info.uri);
  console.log("server running at:  ",server.info.uri);
});
