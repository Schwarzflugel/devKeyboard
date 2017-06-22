var router = require('restify-router').Router;
var downloadRouter = new router();
var restify = require('restify');
var morgan = require('morgan');

downloadRouter.use(morgan('dev'));
downloadRouter.use(restify.bodyParser());
downloadRouter.use(restify.queryParser());

module.exports = downloadRouter;
