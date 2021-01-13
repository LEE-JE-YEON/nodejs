//import express from 'express';
const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/html'});
    response.write('hello worlddd');
    response.end();
}).listen(3000);

console.log('server running at http://localhost:3000');