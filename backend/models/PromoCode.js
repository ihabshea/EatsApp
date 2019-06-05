const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PromocodeSchema = new Schema({
    percentage: {
        type: Boolean,
        require: true
    },
    specificaPrice: {
        type: Boolean,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    expires: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('Promocode', PromocodeSchema);