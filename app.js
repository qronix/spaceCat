var finalHandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('public',{'index':['index.html']});

const port = process.env.PORT || 3000;

var server = http.createServer(function onRequest(req,res){
    serve(req,res,finalHandler(req,res));
});

server.listen(port);
