const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    country: {
        type:  Schema.Types.ObjectId,
        ref: "country"
    },
    city: {
        type:  Schema.Types.ObjectId,
        ref: "city"
    },
    neighbourhood: {
        type:  Schema.Types.ObjectId,
        ref: "neighbourhood"
    },
    street: {
        type:  String,
        require: true
    },
    building: {
        type:  String,
        require: true
    },
    flat: {
        type:  String,
        require: true
    },
});
module.exports = mongoose.model('AddressStatus', AddressSchema);