const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantStatusSchema = new Schema({
    status: {
        type:  String,
        require: true
    },
    lastUpdated: {
        type:  String,
        require: true
    },
});
module.exports = mongoose.model('RestaurantStatus', RestaurantStatusSchema);