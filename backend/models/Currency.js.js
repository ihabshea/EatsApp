const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CurrencySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    shorthand: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('Currency',CurrencySchema);