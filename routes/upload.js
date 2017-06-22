var router = require('restify-router').Router;
var uploadRouter = new router();
var restify = require('restify');
var morgan = require('morgan');
var fileFunction = require('../functions/file');

uploadRouter.use(morgan('dev'));
uploadRouter.use(restify.bodyParser());
uploadRouter.use(restify.queryParser());

uploadRouter.post('/upload/preset', function(req, res) {
    var fileName = req.body.id + '.json';
    if (!fileFunction.findFile(fileName)) {
        fileFunction.uploadFile(req.body);
		res.json({
			status: 'success',
			msg: fileName + ' uploaded'
		})
    }else {
		var errMsg = fileName + ' already exist';
		res.json({
			status: 'fail',
			msg: errMsg
		});
	}
});

module.exports = uploadRouter;
