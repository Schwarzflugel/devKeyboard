var restify = require('restify');
var mongoose = require('mongoose');
var server = restify.createServer({
     name: "ㅗㅜㅑ"
});

mongoose.connect('mongodb://localhost');
var db = mongoose.connection;

var dlRouter = require('./routers/download');
var uploadRouter = require('./routes/upload');

dlRouter.applyRoutes(server);
uploadRouter.applyRoutes(server);

db.once('open', function() {
     console.log('db open');
     server.listen(8000, function() {
          console.log('server open');
     });
});
db.on('error', function(err) {
     res.send({
          status: 'fail',
          msg: err
     });
});
