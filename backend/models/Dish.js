const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DishSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: "Rating" 
    }],
    prices:[{
        type: Schema.Types.ObjectId,
        ref: "Price" 
    }],
    description: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('Dish',DishSchema);