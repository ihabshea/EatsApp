const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TripSchema = new Schema({
    date: {
        type: String,
        require: true
    },
    start_time: {
        type: String,
        require: false
    },
    restaurant_time: {
        type: String,
        require: false
    },
    finish_time: {
        type: String,
        require: false
    },
    rating: {
        type: Schema.Types.ObjectId,
        ref: "Rating"
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
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});
module.exports = mongoose.model('Trip', TripSchema);