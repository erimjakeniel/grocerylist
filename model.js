const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Shop = new Schema({
  item: String,
  quantity: String,
  priority: String
});


module.exports = mongoose.model('Item', Shop);