var fs = require('fs');
var util = require('util');
var path = require('path');

module.exports.uploadFile = function(file) {
    var fileName = './public/' + file.id + '.json';
    fs.writeFile(fileName, JSON.stringify(file, null, 3), function(err, data) {
        if (err) {
            res.end({
                status: 'fail',
                msg: 'file writer err'
            });
        } else {
            console.log(file.id + '.json uploaded');
        }
    });
};

module.exports.findFile = function(fileName) {
    var reserved = false;
    var mainPath = './public';
    var files = fs.readdirSync(mainPath);

    for (var i in files) {
        if (fileName === files[i]) {
            reserved = true;
        }
    }

    return reserved;
};
