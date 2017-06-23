var router = require('restify-router').Router;
var downloadRouter = new router();
var restify = require('restify');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var fileFunction = require('../functions/file');

downloadRouter.use(morgan('dev'));
downloadRouter.use(restify.bodyParser());
downloadRouter.use(restify.queryParser());

downloadRouter.post('/download', function(req, res) {
	var fileName = req.params.id + '.json';

    if (fileFunction.findFile(fileName)) {
	    var mainPath = './public';
	    var fileFullName = path.join(mainPath, fileName);

	    fs.readFile(fileFullName, 'utf8', function(err, data) {
	        if (err) {
	            res.send({
	                status: 'fail',
	                msg: 'fileRead err'
	            });
	        }
			res.json(JSON.parse(data));
	    });
    }else {
		res.json({
			status: 'fail',
			msg: 'file not found'
		})
	}
});

module.exports = downloadRouter;
