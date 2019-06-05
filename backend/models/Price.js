const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PriceSchema = new Schema({
    quantity: {
        type: String,
        require: true
    },
    currency: {
        type: Schema.Types.ObjectId,
        ref: "Currency"
    }
});
module.exports = mongoose.model('Price', PriceSchema);