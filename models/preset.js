var mongoose = require('mongoose');

var presetSchema = mongoose.Schema({

});
var presetModel = mongoose.model('Presets', presetSchema);

module.exports = presetModel;
