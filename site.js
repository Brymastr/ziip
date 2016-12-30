const mongoose = require('mongoose');

module.exports = mongoose.model('Site', Schema({
  url: String,
  code: String,
  user: String,       // Not yet sure what this means. Could be a hash of a user's browser plugins/location/
  date_created: Date
}))