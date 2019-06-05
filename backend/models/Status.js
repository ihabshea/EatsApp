const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StatusSchema = new Schema({
    date: {
        type: String,
        require: true
    },
    updated: {
        type: String,
        require: true
    },
    pilot: { 
        type:  Schema.Types.ObjectId,
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
    approved: {
        type: Boolean
    },

});
module.exports = mongoose.model('Status', StatusSchema);