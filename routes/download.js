var router = require('restify-router').Router;
var mongoose = require('mongoose');
var presetModel = require('../models/preset');

router.get('/download/preset', function(req, res, err) {
     if (err) {
          res.end({
               status: 'fail',
               msg: err
          });
     }
     presetModel.find({}, function(err, presets) {
          console.log(presets);
          //res.send(presets);
     });
});

module.exports = router;
