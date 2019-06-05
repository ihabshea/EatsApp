const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderItemSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    dish: {
        type: Schema.Types.ObjectId,
        ref: "Dish"
    },
    quantity: {
        type: Number,
        require: true
    },
    ItemPrice: {
        type: Number,
        require: true
    },
    TotalPrice: {
        type: Number,
        require: true
    },
});
module.exports = mongoose.model('OrderItem', OrderItemSchema);