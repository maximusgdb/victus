var mongoose = require('mongoose');

var tableSchema = new mongoose.Schema({
  status: String,
  sno: Number,
  owner: String
});

module.exports = mongoose.model('Table', tableSchema);
