const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "RestaurantStatus"
  },
  ratings: [{
    type: Schema.Types.ObjectId,
    ref: "Rating"
  }],
  trips: [{
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }],
  dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish"
  }],
  address: [{
    type: Schema.Types.ObjectId,
    ref: "Address"
  }],
  currentAddress:{
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  restaurantCategories: [{
    type: Schema.Types.ObjectId,
    ref: "Category"
  }],
  TFA: {
    type: Boolean,
    require: true
  }
});
module.exports = mongoose.model('User', userSchema);
