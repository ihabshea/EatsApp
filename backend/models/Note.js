const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    text: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('Note',NoteSchema);