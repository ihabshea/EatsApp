const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    date: {
        type: String,
        require: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    pilot: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    totalPaid: {
        type: Number,
        require: true
    }
});
module.exports = mongoose.model('Payment', PaymentSchema);