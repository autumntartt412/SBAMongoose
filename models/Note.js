const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    comment: { type: String, required: false },
});


let Note = mongoose.model('Note', noteSchema);
module.exports = Note;

