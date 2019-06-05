const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Article = require('./Article');
const User =  require('./User');
const Language = require('./Language');
const TFASchema = new Schema({
  code: {
    type: String,
    require: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});
module.exports = mongoose.model('TFA', TFASchema);
