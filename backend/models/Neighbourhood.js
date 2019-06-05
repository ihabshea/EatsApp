const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NeighbourhoodSchema = new Schema({
    name: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('Neighbourhood',NeighbourhoodSchema);