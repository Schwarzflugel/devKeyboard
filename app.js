var restify = require('restify');
var server = restify.createServer({
     name: "ㅗㅜㅑ"
});

var dlRouter = require('./routes/download');
var uploadRouter = require('./routes/upload');

server.get(/\/public\/?.*/, restify.serveStatic({
	directory: __dirname
}));

dlRouter.applyRoutes(server);
uploadRouter.applyRoutes(server);

server.listen(8000, function(){
	console.log('server open');
});
