const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    pilot: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: [{
        type: Schema.Types.ObjectId,
        ref: "OrderItem"
    }],
    date: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    promocode: {
        type: String,
        require: false
    },
    TotalPrice: {
        type: Number,
        require: true
    },
});
module.exports = mongoose.model('Order', OrderSchema);